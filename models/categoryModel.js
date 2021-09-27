import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
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
  chpu: [
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
  parent_id: [
    {
      value: {
        type: String,
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
  image: [
    {
      value: {
        type: String,
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
  attributes: [
    {
      value: [
        {
          attribute_id: {
            type: String,
            required: true,
          },
          value: {
            type: String,
            required: true,
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
  mongoose.models.category || mongoose.model('category', categorySchema)

export default Dataset
