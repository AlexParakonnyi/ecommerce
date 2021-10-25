import Attribute from '../../../models/attributesModel'

const findAttribute = async (el) => {
  try {
    const result = await Attribute.findOne({ id: el.id })
    return result
  } catch (e) {
    console.log(e)
  }
}

const createAttributes = async (req, res) => {
  try {
    const val = req.body.attributes
    const resObj = []

    if (!val.length) {
      return { error: 'guarantee are empty', status: 412, success: false }
    }

    for (const el of val) {
      const { id, name, values, removed } = el

      const res = await findAttribute(el)

      if (res) {
        console.log(`Attribute id : ${res.id} already existed`)
        resObj.push({ id: res.id, error: 'existed', success: false })
      } else {
        const newAttribute = new Attribute({
          id,
          name,
          values,
          removed,
        })

        await newAttribute.save((err) => {
          if (err) throw err
        })

        console.log(`Initial attribute successfully saved id: ${id}`)
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

export default createAttributes
