import Categories from '../../../models/categoryModel'

const searchCategoryByChpu = async ({ chpu } = { chpu: '' }) => {
  try {
    const category = await Categories.aggregate([
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
          description: {
            $last: '$description',
          },
          keys: {
            $last: '$keys',
          },
          title: {
            $last: '$title',
          },
          metaDescription: {
            $last: '$metaDescription',
          },
          breadcrumbs: {
            $last: '$breadcrumbs',
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
          keys: '$keys.value',
          description: '$description.value',
          title: '$title.value',
          metaDescription: '$metaDescription.value',
          breadcrumbs: '$breadcrumbs.value',
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

    return { category: category[category.length - 1] }
  } catch (err) {
    console.log(`Failed find category by chpu ${err}`)
    return { errCategory }
  }
}

export default searchCategoryByChpu
