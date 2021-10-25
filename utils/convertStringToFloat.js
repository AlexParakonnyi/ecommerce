const convertStringToFloat = ({ value, decimalChars }) => {
  const parsed = parseFloat(value)
  const multiply = parseInt(`1${'0'.repeat(decimalChars)}`)

  if (isNaN(parsed)) {
    return 0
  }

  const converted = Math.round(parsed * multiply) / multiply

  return converted
}

export default convertStringToFloat
