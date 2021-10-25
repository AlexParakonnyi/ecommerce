import Currency from '../../../models/currencyModel'

const getCurrencies = async () => {
  try {
    const currencies = await Currency.aggregate([
      {
        $project: {
          _id: '$id',
          name: {
            $last: '$name',
          },
          short_name: {
            $last: '$short_name',
          },
          value: {
            $last: '$value',
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
          short_name: '$short_name.value',
          value: '$value.value',
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

    return { currencies }
  } catch (errCurrencies) {
    console.log(`Failed get currencies. The reason: ${errCurrencies.message}`)
    return { errCurrencies }
  }
}

export default getCurrencies
