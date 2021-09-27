import Categories from '../../../models/categoryModel'
import processingImage from '../../../utils/processingImage'

const findCategory = async (el) => {
  try {
    const result = await Categories.findOne({ id: el.id })
    return result
  } catch (e) {
    console.log(e)
  }
}

const createCategories = async (req, res) => {
  try {
    const val = req.body.categories
    const resObj = []

    if (!val.length)
      return { error: 'categories are empty', status: 412, success: false }

    for (const el of val) {
      const { id, name, chpu, parent_id, image, attributes, removed } = el
      const lastImage = image[image.length - 1]
      const imageName =
        lastImage?.value === '' ? process.env.EMPTY_PHOTO : lastImage?.value

      //download, convert and save image
      const newImageName = await processingImage(imageName)
      lastImage.value = newImageName

      const res = await findCategory(el)
      if (res) {
        console.log(`Category id : ${res.id} has already existed`)
        resObj.push({ id: res.id, error: 'existed', success: false })
      } else {
        const newCategories = new Categories({
          id,
          name,
          chpu,
          parent_id,
          image,
          attributes,
          removed,
        })

        newCategories.save((err) => {
          if (err) throw err
        })

        console.log(`Initial category successfully saved id: ${id}`)
        resObj.push({ id: id, error: false, success: true })
      }
    }

    return res
      .status(200)
      .json({ error: null, status: 200, success: true, result: resObj })
  } catch (err) {
    console.log('ERROR', err)
    return res.status(500).json({ err: err.message })
  }
}

export default createCategories
