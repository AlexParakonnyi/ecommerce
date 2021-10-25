import nextConnect from 'next-connect'
import connectDB from '../../../middleware/databaseConnect'
import checkPostToken from '../../../middleware/checkPostToken'
import createCurrency from './createCurrency'
import replacer from '../../../middleware/replacer'

const handler = nextConnect()

handler
  .use(connectDB())
  .use(checkPostToken())
  .use(replacer())

  .post(async (req, res) => {
    await createCurrency(req, res)
  })

export default handler
