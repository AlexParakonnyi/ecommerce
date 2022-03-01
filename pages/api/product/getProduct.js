import searchProducts from './searchProducts'
import { composeRes } from './utils'

console.log('test 3')
const getProduct = async (req, res, productChpu) => {
  const { products, errProduct } = await searchProducts({
    productChpu,
  })

  if (errProduct) {
    return res.status(500).json({ err: errProduct.message })
  }

  const resProduct = await composeRes(products)

  res.json({
    status: 'success',
    result: products.length,
    product: resProduct,
  })
}

export default getProduct
