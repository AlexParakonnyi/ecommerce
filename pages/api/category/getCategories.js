import Categories from '../../../models/categoryModel'

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.aggregate([
      {
        $project: {
          _id: '$id',
          name: {
            $last: '$name',
          },
          parent_id: {
            $last: '$parent_id',
          },
          image: {
            $last: '$image',
          },
          removed: {
            $last: '$removed',
          },
        },
      },
      {
        $project: {
          _name: '$name.value',
          _parent_id: '$parent_id.value',
          _image: '$image.value',
          _removed: '$removed.value',
        },
      },
      {
        $project: {
          name: 0,
          parent_id: 0,
          image: 0,
          removed: 0,
        },
      },
      {
        $match: {
          _parent_id: '',
        },
      },
    ])

    res.json({
      status: 'success',
      result: categories.length,
      categories,
    })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}

export default getCategories
