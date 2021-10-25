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
  const EMPTY_PHOTO = process.env.EMPTY_PHOTO

  try {
    const val = req.body.categories
    const resObj = []

    if (!val.length)
      return { error: 'categories are empty', status: 412, success: false }

    for (const el of val) {
      const {
        id,
        name,
        chpu,
        parent_id,
        images,
        attributes,
        description,
        keys,
        title,
        metaDescription,
        breadcrumbs,
        removed,
      } = el

      const lastImage = images[0]

      //download, convert and save all images of product
      const convertedImages = {
        ...lastImage,
        value: await processingImage(lastImage.value),
      }

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
          images: convertedImages,
          attributes,
          description,
          keys,
          title,
          metaDescription,
          breadcrumbs,
          removed,
        })

        await newCategories.save((err) => {
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
