import mongoose from 'mongoose'
import connectPrimaryData from './connect/mongoose'

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const CreatorSchema = new Schema(
  {
    avatar: {
      type: String,
      // required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  },
)

const GeneratorSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  },
)

const StoriesSchema = new Schema(
  {
    creator: CreatorSchema,

    generator: GeneratorSchema,

    categories: {
      type: [String],
      index: true,
      required: true,
    },

    slug: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      unique: true,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    media: {
      type: String,
      required: true,
    },

    publishedAt: {
      type: Date,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      enum: ['en-US'],
      default: 'en-US',
    },

    type: {
      type: String,
      enum: ['article'],
      default: 'article',
    },
  },
  { timestamps: true },
)

// indexes
StoriesSchema.index({
  link: 1,
  slug: 1,
  publishedAt: -1,
  type: 1,
})

StoriesSchema.index({ createdAt: -1 })
StoriesSchema.index({ updatedAt: -1 })

// plugins
// StoriesSchema.plugin(timestamps)

// methods
// StoriesSchema.statics.createANewToken = function () {}

let model = null

export default function () {
  return new Promise(async (resolve, reject) => {
    try {
      if(mongoose.connection.readyState !== 1 || mongoose.connection.readyState !== 2) {
        model = null
        const conn = await connectPrimaryData()
        model = mongoose.model('Stories', StoriesSchema)
      }
      resolve(model)
    } catch (err) {
      reject(err)
    }
  })
}