import searchProducts from './searchProducts'
import searchCategoryByChpu from '../category/searchCategoryByChpu'
import getGuaranties from '../guaranty/getGuaranties'
import getAttributes from '../attributes/getAttributes'
import getCurrencies from '../currency/getCurrencies'
import convertStringToFloat from '../../../utils/convertStringToFloat'
import assignment from 'assignment'

const getProducts = async (req, res, parentChpu) => {
  const resProducts = []

  const { category, errCategory } = await searchCategoryByChpu({
    chpu: parentChpu,
  })
  if (errCategory) return res.status(500).json({ err: errCategory.message })

  const { products, errProducts } = await searchProducts({
    parent: category.id,
  })

  if (errProducts) {
    return res.status(500).json({ err: errProducts.message })
  }

  for (const prodEl of products) {
    const guaranty = await getGuarantyById(prodEl.guarantee_id)
    const attributes = await getAttributesByIds(prodEl.attributes)
    const currency = await getCurrencyById(prodEl.currency_id)
    const price = await getComputedPrice(
      prodEl.prices.value,
      currency.currency.value
    )

    const {
      id,
      name,
      chpu,
      parent_id,
      sale,
      images,
      unit_id,
      description,
      keys,
      title,
      metaDescription,
    } = prodEl

    const shortProduct = {
      id,
      name,
      chpu,
      parent_id,
      sale,
      images,
      unit_id,
      description,
      keys,
      title,
      metaDescription,
    }

    resProducts.push(assignment(shortProduct, guaranty, attributes, price))
  }

  res.json({
    status: 'success',
    result: products.length,
    products: resProducts,
  })
}

const getGuarantyById = async (id) => {
  const { guaranties, errGuarantees } = await getGuaranties()
  const guarEl = guaranties.find((item) => item.id === id)
  return { guaranty: guarEl?.name }
}

const getAttributesByIds = async (productAttributes) => {
  const attributes_arr = []
  const { attributes, errAttributes } = await getAttributes()

  productAttributes.forEach((attrItem) => {
    const foundAttribute = attributes.find(
      (item) => item.id === attrItem.attribute_id
    )

    const foundValue = foundAttribute.values.find(
      (item) => item.id === attrItem.value_id
    )

    foundAttribute &&
      foundValue &&
      attributes_arr.push({
        name: foundAttribute.name,
        value: foundValue.value,
      })
  })

  return { attributes_arr: attributes_arr }
}

const getCurrencyById = async (id) => {
  const { currencies, errCurrencties } = await getCurrencies()
  const currencyEl = currencies.find((item) => item.id === id)
  return {
    currency: { name: currencyEl?.short_name, value: currencyEl?.value },
  }
}

const getComputedPrice = (priceValue, currencyValue) => {
  const val = convertStringToFloat({
    value: priceValue,
    decimalChars: process.env.PRICE_DECIMAL_CHARACTERS,
  })

  const exchangeRate = convertStringToFloat({
    value: currencyValue,
    decimalChars: '10',
  })

  const resPrice = convertStringToFloat({
    value: val * exchangeRate,
    decimalChars: process.env.PRICE_DECIMAL_CHARACTERS,
  })

  return { price: { value: resPrice ? resPrice : '' } }
}

export default getProducts
