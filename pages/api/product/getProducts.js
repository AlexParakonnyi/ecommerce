import searchProducts from './searchProducts'
import searchCategoryByChpu from '../category/searchCategoryByChpu'
import { composeRes } from './utils'

const getProducts = async (req, res, parentChpu) => {
  const { category, errCategory } = await searchCategoryByChpu({
    chpu: parentChpu,
  })

  if (errCategory) return res.status(500).json({ err: errCategory.message })
  console.log('test2')
  const { products, errProducts } = await searchProducts({
    parent: category.id,
  })
  console.log('@@@', products, errProducts)
  if (errProducts) {
    return res.status(500).json({ err: errProducts.message })
  }

  const resProducts = await composeRes(products)
  console.log('^^^', resProducts)

  res.json({
    status: 'success',
    result: products.length,
    products: resProducts,
  })
}

export default getProducts
