import Products from '../../../models/productModel'
import processingImage from '../../../utils/processingImage'

const findProduct = async (el) => {
  try {
    const result = await Products.findOne({ id: el.id })
    return result
  } catch (e) {
    console.log(e)
  }
}

const createProduct = async (req, res) => {
  const EMPTY_PHOTO = process.env.EMPTY_PHOTO

  try {
    const val = req.body.products
    const resObj = []

    if (!val.length)
      return { error: 'products are empty', status: 412, success: false }

    for (const el of val) {
      const {
        id,
        name,
        chpu,
        parent_id,
        currency_id,
        sale,
        guarantee_id,
        images,
        codes,
        providers,
        prices,
        attributes,
        labels,
        unit_id,
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

      const res = await findProduct(el)

      if (res) {
        console.log(`product id : ${res.id} already existed`)
        resObj.push({ id: res.id, error: 'existed', success: false })
      } else {
        const newProducts = new Products({
          id,
          name,
          chpu,
          parent_id,
          currency_id,
          sale,
          guarantee_id,
          images: convertedImages,
          codes,
          providers,
          prices,
          attributes,
          labels,
          unit_id,
          description,
          keys,
          title,
          metaDescription,
          breadcrumbs,
          removed,
        })

        await newProducts.save((err) => {
          if (err) throw err
        })

        console.log(`Initial product successfully saved id: ${id}`)
        resObj.push({ id: id, error: false, success: true })
      }
    }

    return res.status(200).json({
      error: null,
      status: 200,
      success: true,
      result: resObj,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ err: err.message })
  }
}

export default createProduct
