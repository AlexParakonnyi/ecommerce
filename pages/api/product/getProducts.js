import Products from '../../../models/productModel'

const getProducts = async (req, res) => {
  try {
    const products = await Products.find()
    res.json({
      status: 'success',
      result: products.length,
      products,
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}

export default getProducts
