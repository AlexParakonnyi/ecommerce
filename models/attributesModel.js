import mongoose from 'mongoose'

const attributeSchema = new mongoose.Schema({
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
  values: [
    {
      value: [
        {
          id: {
            type: String,
          },
          value: {
            type: String,
          },
        },
      ],
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
  mongoose.models.attribute || mongoose.model('attribute', attributeSchema)

export default Dataset
