import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
        // required: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  chpu: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
        // required: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  parent_id: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  currency_id: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
        // required: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  sale: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: Boolean,
        required: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  guarantee_id: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  images: [
    {
      date: {
        type: Date,
        // required: true,
      },
      value: [
        {
          name: {
            type: String,
          },
        },
      ],
      updated_by: {
        type: String,
        // required: true,
      },
    },
  ],
  codes: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: [
        {
          value: {
            type: String,
          },
        },
      ],
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  providers: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: [
        {
          contractor_id: {
            type: String,
          },
        },
      ],
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  prices: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: [
        {
          price_id: {
            type: String,
          },
          value: {
            type: String,
          },
        },
      ],
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  attributes: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: [
        {
          attribute_id: {
            type: String,
            requierd: true,
          },
          value_id: {
            type: String,
            requierd: true,
          },
        },
      ],
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  labels: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: [
        {
          label_id: {
            type: String,
          },
          price_id: {
            type: String,
          },
          quantity: {
            type: String,
          },
          turned_on: {
            type: Boolean,
          },
        },
      ],
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  unit_id: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
        requierd: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  description: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
        requierd: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  keys: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
        requierd: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  title: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
        requierd: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  metaDescription: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: String,
        requierd: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  breadcrumbs: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: [
        {
          id: {
            type: String,
          },
          name: {
            type: String,
          },
          chpu: {
            type: String,
          },
        },
      ],
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
  removed: [
    {
      date: {
        type: Date,
        required: true,
      },
      value: {
        type: Boolean,
        requierd: true,
      },
      updated_by: {
        type: String,
        required: true,
      },
    },
  ],
})

let Dataset =
  mongoose.models.product || mongoose.model('product', productSchema)

export default Dataset
