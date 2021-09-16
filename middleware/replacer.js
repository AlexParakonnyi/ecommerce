const repl = function replace(value) {
  if (typeof value == 'object') {
    for (const [key, val] of Object.entries(value)) {
      if (typeof val == 'object') replace(val)

      if (key === 'value' && typeof val == 'string' && val === '.')
        value[key] = ''
    }
  }
}

const replacer = () => {
  return function (req, res, next) {
    repl(req.body)
    next()
  }
}

export default replacer
