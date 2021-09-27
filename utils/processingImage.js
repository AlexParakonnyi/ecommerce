import fs from 'fs'
import crypto from 'crypto'
import sharp from 'sharp'
import path from 'path'
import imageHexModel from '../models/imageHexModel'
import connectDB from '../utils/connectDB'

connectDB()

/*-----------------------------------------------------*/
async function processingImage(imgName) {
  const url = `${process.env.IMAGE_PATH}${imgName}`
  // const url = imgName
  const imgPath = `./public/img/products/`
  const tmpFileName = `./public/img/tmp/${Date.now()}.webp`
  const fileNameObj = path.parse(tmpFileName)

  try {
    const buffer = await downloadFile(url)
    // const meta = await sharp(buffer).metadata()
    // console.log(meta)
    await sharp(buffer).resize(1000).webp({ quality: 80 }).toFile(tmpFileName)
    const hex = getHex({ fileName: tmpFileName })

    const res = await findHex(hex)
    if (res) {
      fs.unlink(tmpFileName, (err) => {
        if (err) throw err
      })
      // console.log(`file ${name} has already existed`)
      return res.name
    } else {
      const newImageHex = new imageHexModel({
        name: String(fileNameObj.base),
        originName: imgName,
        hex: hex,
        url: url,
      })
      await newImageHex.save((err) => {
        if (err) {
          throw err
        }
      })
    }

    fs.rename(tmpFileName, `${imgPath}${fileNameObj.base}`)

    console.log(`Image ${imgName} successfully saved`)

    return String(fileNameObj.base)
  } catch (err) {
    console.log(`Failed downloading image: ${imgName} ${err.message}`)
  }
}

/*-----------------------------------------------------*/
const findHex = async (hex) => {
  try {
    const result = await imageHexModel.findOne({ hex })
    return result
  } catch (err) {
    throw err
  }
}

/*-----------------------------------------------------*/
const downloadFile = async (url) => {
  try {
    const response = await fetch(url)
    const buffer = await response.buffer()
    return buffer
  } catch (err) {
    console.log(`Can't download image ${err.message}`)
  }
}

/*-----------------------------------------------------*/
const getHex = ({ fileName, buffer }) => {
  const fileBuffer = buffer || fs.readFileSync(fileName)
  const hashSum = crypto.createHash('sha256')
  hashSum.update(fileBuffer)

  return hashSum.digest('hex')
}

export default processingImage
