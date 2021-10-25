import searchCategoryByChpu from './searchCategoryByChpu'
import searchCategories from './searchCategories'

const getCategories = async (req, res, parentChpu = '') => {
  const { category } = await searchCategoryByChpu({ chpu: parentChpu })
  const parent = category?.id || ''
  const { categories, err } = await searchCategories(parent)

  if (err) {
    return res.status(500).json({ err: err.message })
  }

  res.json({
    status: 'success',
    result: categories.length,
    categories,
    category,
  })
}

export default getCategories
