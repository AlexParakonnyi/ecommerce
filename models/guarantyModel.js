import mongoose from 'mongoose'

const guarantySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: [
    {
      value: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  removed: [
    {
      value: {
        type: Boolean,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
})

let Dataset =
  mongoose.models.guaranty || mongoose.model('guaranty', guarantySchema)

export default Dataset
