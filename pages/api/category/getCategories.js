import searchIdByChpu from './searchIdByChpu'
import searchCategories from './searchCategories'

const getCategories = async (req, res) => {
  const params = req.query
  const chpu = params?.productChpu
  const parent = !!chpu ? await searchIdByChpu({ chpu }) : ''

  const { categories, err } = await searchCategories(parent)

  if (err) {
    return res.status(500).json({ err: err.message })
  }

  res.json({
    status: 'success',
    result: categories.length,
    categories,
  })
}

export default getCategories
