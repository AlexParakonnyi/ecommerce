import Products from '../../../models/productModel'

const searchProducts = async ({ parent = '' } = { parent: '' }) => {
  try {
    const products = await Products.aggregate([
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
          sale: {
            $last: '$sale',
          },
          currency_id: {
            $last: '$currency_id',
          },
          guarantee_id: {
            $last: '$guarantee_id',
          },
          images: {
            $last: '$images',
          },
          prices: {
            $last: '$prices',
          },
          attributes: {
            $last: '$attributes',
          },
          unit_id: {
            $last: '$unit_id',
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
          sale: '$sale.value',
          currency_id: '$currency_id.value',
          guarantee_id: '$guarantee_id.value',
          images: '$images.value',
          prices: '$prices.value',
          attributes: '$attributes.value',
          unit_id: '$unit_id.value',
          description: '$description.value',
          keys: '$keys.value',
          title: '$title.value',
          metaDescription: '$metaDescription.value',
          breadcrumbs: '$breadcrumbs.value',
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
          codes: 0,
          labels: 0,
          providers: 0,
        },
      },
      {
        $unwind: '$prices',
      },
      {
        $match: {
          'prices.price_id': '3',
        },
      },
    ])

    return { products }
  } catch (errProducts) {
    return { errProducts }
  }
}

export default searchProducts
