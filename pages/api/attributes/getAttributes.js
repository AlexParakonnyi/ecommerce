import Attribute from '../../../models/attributesModel'

const getAttributes = async () => {
  try {
    const attributes = await Attribute.aggregate([
      {
        $project: {
          _id: '$id',
          name: {
            $last: '$name',
          },
          values: {
            $last: '$values',
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
          values: '$values.value',
          removed: '$removed.value',
        },
      },
      {
        $match: {
          removed: false,
        },
      },
      {
        $project: {
          removed: 0,
        },
      },
      {
        $project: {
          id: 1,
          name: 1,
          values: {
            $map: {
              input: '$values',
              as: 'el',
              in: { id: '$$el.id', value: '$$el.value' },
            },
          },
        },
      },
    ])

    return { attributes }
  } catch (errAttributes) {
    console.log(`Failed get guarantees. The reason: ${errAttributes.message}`)
    return { errAttributes }
  }
}

export default getAttributes
