import nextConnect from 'next-connect'
import connectDB from '../../../middleware/databaseConnect'
import checkPostToken from '../../../middleware/checkPostToken'
import replacer from '../../../middleware/replacer'
import createAttributes from './createAttributes'

const handler = nextConnect()

handler
  .use(connectDB())
  .use(checkPostToken())
  .use(replacer())

  .post(async (req, res) => {
    await createAttributes(req, res)
  })

export default handler
