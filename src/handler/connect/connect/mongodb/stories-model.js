import mongoose from 'mongoose'

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

    publishedAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
)

// indexes
StoriesSchema.index({
  link: 1,
  slug: 1,
  type: 1,
})

StoriesSchema.index({ createdAt: -1 })
StoriesSchema.index({ updatedAt: -1 })
StoriesSchema.index({ publishedAt: -1 })

// plugins
// StoriesSchema.plugin(timestamps)

// methods
// StoriesSchema.statics.createANewToken = function () {}

const StoriesModel = mongoose.model('Stories', StoriesSchema)
export default StoriesModel
