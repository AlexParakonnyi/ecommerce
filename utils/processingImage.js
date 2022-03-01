import fs from 'fs'
import crypto from 'crypto'
import sharp from 'sharp'
import path from 'path'
import imageHexModel from '../models/imageHexModel'
import connectDB from '../utils/connectDB'

connectDB()

/*-----------------------------------------------------*/
async function processingImage(images) {
  const imgPath = process.env.IMAGE_LOCAL_STORAGE_PATH

  const res = await Promise.all(
    images.map(async (el) => {
      try {
        const url = `${process.env.IMAGE_PATH}${el.name}`
        const buffer = await downloadFile(url)
        const hex = getHex({ buffer })
        const tmpFileName = `./public/img/tmp/${hex}.webp`
        const fileNameObj = path.parse(tmpFileName)

        // const meta = await sharp(buffer).metadata()
        // console.log(meta)
        await sharp(buffer)
          .resize(1000)
          .webp({ quality: 80 })
          .toFile(tmpFileName)

        const res = await findHex(hex)

        if (res) {
          fs.unlink(tmpFileName, (err) => {
            if (err) console.log(`Failed delete file ${err}`)
          })

          return { name: res.name }
        } else {
          const newImageHex = new imageHexModel({
            name: String(fileNameObj.base),
            originName: el.name,
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

        console.log(`Image ${el.name} successfully saved`)

        return { name: String(fileNameObj.base) }
      } catch (err) {
        console.log(`Failed downloading image: ${el.name} ${err.message}`)
        return { name: null }
      }
    })
  )

  const resFiltered = filterArr(res)

  return resFiltered.length ? resFiltered : [{ name: process.env.EMPTY_PHOTO }]
}

/*-----------------------------------------------------*/
const filterArr = (arr) => {
  const values = arr.map((el) => el.name)
  const arrFromSet = Array.from(new Set(values))
  const filteredArrFromNull = arrFromSet.filter((el) => !!el)
  const res = filteredArrFromNull.map((el) => ({ name: el }))

  return res
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
