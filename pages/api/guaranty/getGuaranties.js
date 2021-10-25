import Guaranty from '../../../models/guarantyModel'

const getGuaranties = async () => {
  try {
    const guaranties = await Guaranty.aggregate([
      {
        $project: {
          _id: '$id',
          name: {
            $last: '$name',
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
    ])

    return { guaranties }
  } catch (errGuaranties) {
    console.log(`Failed get guaranties. The reason: ${errGuaranties.message}`)
    return { errGuaranties }
  }
}

export default getGuaranties
