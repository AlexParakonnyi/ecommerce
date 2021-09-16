import connectDB from '../utils/connectDB'

export default function database() {
  return async (req, res, next) => {
    await connectDB()
    next()
  }
}
