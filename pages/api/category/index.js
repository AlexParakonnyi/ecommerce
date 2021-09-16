import nextConnect from 'next-connect'
import connectDB from '../../../middleware/databaseConnect'
import checkPostToken from '../../../middleware/checkPostToken'
import replacer from '../../../middleware/replacer'
import getCategories from './getCategories'
import createCategories from './createCategories'

const handler = nextConnect()

handler
  .use(connectDB())
  .use(checkPostToken())
  .use(replacer())

  .get(async (req, res) => {
    await getCategories(req, res)
  })

  .post(async (req, res) => {
    await createCategories(req, res)
  })

export default handler
