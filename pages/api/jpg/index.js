import nextConnect from 'next-connect'
import path from 'path'
import processingImage from '../../../utils/processingImage'

const handler = nextConnect()

handler.get(async (req, res) => {
  const imgName = 'https://brilliant24.ru/files/cat/template_01.png'
  try {
    processingImage(imgName)
    res.status(200).json({ message: 'All good' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

export default handler
