import Categories from '../../../models/categoryModel'

const searchIdByChpu = async ({ chpu } = {}) => {
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
          chpu: chpu,
          removed: false,
        },
      },
      {
        $project: {
          removed: 0,
        },
      },
      { $limit: 1 },
    ])

    return categories[categories.length - 1]?.id
  } catch (err) {
    console.log(`Failed find category by chpu ${err}`)
    return ''
  }
}

export default searchIdByChpu
