import mongoose from 'mongoose'

const imageHexModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    originName: {
      type: String,
      required: true,
    },
    hex: {
      type: String,
      required: true,
      unique: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
)

let Dataset =
  mongoose.models.imageHexModel ||
  mongoose.model('imageHexModel', imageHexModel)
export default Dataset
