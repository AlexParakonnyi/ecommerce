import mongoose from 'mongoose'

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to MongoDB')
    return
  }
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(`Can't connect to MongoDB ${err}`)
        throw err
      }
      console.log('Successfully connected to mongodb')
    }
  )
}

export default connectDB
