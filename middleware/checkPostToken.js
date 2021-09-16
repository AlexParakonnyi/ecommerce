const checkPostToken = () => {
  return (req, res, next) => {
    if (req.method == 'POST') {
      if (req.headers.token !== process.env.POST_TOKEN) {
        console.log('incorrect token during POST products')
        return res.status(500).json({ err: 'incorrect token' })
      }
    }
    next()
  }
}

export default checkPostToken
