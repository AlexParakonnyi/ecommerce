import nextConnect from 'next-connect'
import connectDB from '../../../middleware/databaseConnect'
import checkPostToken from '../../../middleware/checkPostToken'
import replacer from '../../../middleware/replacer'
import getProducts from './getProducts'
import createProducts from './createProducts'
import getProduct from './getProduct'

const handler = nextConnect()

handler
  .use(connectDB())
  .use(checkPostToken())
  .use(replacer())

  .get(async (req, res) => {
    const { parentChpu, productChpu } = req.query
    if (parentChpu) return await getProducts(req, res, parentChpu)
    if (productChpu) return await getProduct(req, res, productChpu)

    return { err: 'notFound' }
  })

  .post(async (req, res) => {
    await createProducts(req, res)
  })

export default handler
