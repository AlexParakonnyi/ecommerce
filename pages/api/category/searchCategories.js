import Categories from '../../../models/categoryModel'

const searchCategories = async (parent = '') => {
  try {
    const categories = await Categories.aggregate([
      {
        $project: {
          _id: '$id',
          name: {
            $last: '$name',
          },
          chpu: {
            $last: '$chpu',
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
          _id: 0,
          id: '$_id',
          name: '$name.value',
          chpu: '$chpu.value',
          parent_id: '$parent_id.value',
          image: '$image.value',
          removed: '$removed.value',
        },
      },
      {
        $match: {
          parent_id: parent,
          removed: false,
        },
      },
      {
        $project: {
          removed: 0,
        },
      },
    ])

    return { categories }
  } catch (err) {
    return { err }
  }
}

export default searchCategories
