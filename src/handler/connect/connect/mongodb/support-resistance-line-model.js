import mongoose from 'mongoose'

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const LineSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    volumes: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
  },
)

const SupportResistanceLineSchema = new Schema(
  {
    asks: [LineSchema],

    bids: [LineSchema],

    totalAsks: {
      type: Number,
      required: true,
    },

    totalBids: {
      type: Number,
      required: true,
    },

    symbol: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

// indexes
SupportResistanceLineSchema.index({
  symbol: 1,
})

SupportResistanceLineSchema.index({ createdAt: -1 })
SupportResistanceLineSchema.index({ updatedAt: -1 })

// plugins
// SupportResistanceLineSchema.plugin(timestamps)

// methods
// SupportResistanceLineSchema.statics.createANewToken = function () {}

const SupportResistanceLineModel = mongoose.model(
  'SupportResistanceLine',
  SupportResistanceLineSchema,
)
export default SupportResistanceLineModel
