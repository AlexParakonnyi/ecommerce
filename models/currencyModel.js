import mongoose from 'mongoose'

const currencySchema = new mongoose.Schema({
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
  short_name: [
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
  value: [
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
  mongoose.models.currency || mongoose.model('currency', currencySchema)

export default Dataset
