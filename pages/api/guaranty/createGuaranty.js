import Guaranty from '../../../models/guarantyModel'

const findGuaranty = async (el) => {
  try {
    const result = await Guaranty.findOne({ id: el.id })
    return result
  } catch (e) {
    console.log(e)
  }
}

const createGuaranty = async (req, res) => {
  try {
    const val = req.body.guaranties
    const resObj = []

    if (!val.length) {
      return { error: 'guaranty are empty', status: 412, success: false }
    }

    for (const el of val) {
      const { id, name, removed } = el

      const res = await findGuaranty(el)

      if (res) {
        console.log(`guaranty id : ${res.id} already existed`)
        resObj.push({ id: res.id, error: 'existed', success: false })
      } else {
        const newGuaranties = new Guaranty({
          id,
          name,
          removed,
        })

        await newGuaranties.save((err) => {
          if (err) throw err
        })

        console.log(`Initial guaranty successfully saved id: ${id}`)
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

export default createGuaranty
