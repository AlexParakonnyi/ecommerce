import Currency from '../../../models/currencyModel'

const findCurrency = async (el) => {
  try {
    const result = await Currency.findOne({ id: el.id })
    return result
  } catch (e) {
    console.log(e)
  }
}

const createCurrency = async (req, res) => {
  try {
    const val = req.body.currencies
    const resObj = []

    if (!val.length) {
      return { error: 'currencyare empty', status: 412, success: false }
    }

    for (const el of val) {
      const { id, name, short_name, value, removed } = el

      const res = await findCurrency(el)

      if (res) {
        console.log(`currency id : ${res.id} already existed`)
        resObj.push({ id: res.id, error: 'existed', success: false })
      } else {
        const newCurrency = new Currency({
          id,
          name,
          short_name,
          value,
          removed,
        })

        await newCurrency.save((err) => {
          if (err) throw err
        })

        console.log(`Initial currency successfully saved id: ${id}`)
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

export default createCurrency
