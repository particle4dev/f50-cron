import mongoose from 'mongoose'
import {
  exchanges,
  BINANCE,
  TRANSACTION,
  TRANSACTION_TYPES,
} from '../../config'

const { Schema } = mongoose
const { Types: { ObjectId, Mixed } } = Schema

const TransactionsSchema = new Schema({
  userId: {
    type: ObjectId,
    required: true,
  },

  timestamp: {
    type: Date,
    required: true,
  },

  exchange: {
    type: String,
    enum: exchanges,
    default: BINANCE,
  },

  type: {
    type: String,
    enum: TRANSACTION_TYPES,
    default: TRANSACTION,
  },

  from: {
    type: String,
    required: true,
  },

  to: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  executedQuantity: {
    type: Number,
    required: true,
  },

  market: {
    from: {
      priceETH: Number,
      priceUSDT: Number,
      priceBTC: Number,
      priceNEO: Number,
      priceBCH: Number,
      priceLTC: Number,
      priceADA: Number,
      priceBNB: Number,
    },
    to: {
      priceETH: Number,
      priceUSDT: Number,
      priceBTC: Number,
      priceNEO: Number,
      priceBCH: Number,
      priceLTC: Number,
      priceADA: Number,
      priceBNB: Number,
    },
  },

  meta: {
    type: Mixed,
  },

  /**
  orderId: {
    type: Number,
    unique: true,
    required: true,
  },

  clientOrderId: {
    type: String,
  },

  symbol: {
    type: String,
    required: true,
  },
  side: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  origQty: {
    type: Number,
    required: true,
  },
  executedQty: {
    type: Number,
    required: true,
  },
  timeInForce: {
    type: String,
    required: true,
  },
  stopPrice: {
    type: Number,
    required: true,
  },
  icebergQty: {
    type: Number,
    required: true,
  },
  isWorking: {
    type: Boolean,
    required: true,
  },
  */
}, { timestamps: true })

// indexes
TransactionsSchema.index({
  type: 1,
  to: 1,
  userId: 1,
  status: 1,
  exchange: 1,
  from: 1,
})

TransactionsSchema.index({ timestamp: -1 })
TransactionsSchema.index({ createdAt: -1 })
TransactionsSchema.index({ updatedAt: -1 })

// plugins
// TransactionsSchema.plugin(timestamps)

// methods
// TransactionsSchema.statics.createANewToken = function () {}

const TransactionsModel = mongoose.model(
  'UniversalTransactions',
  TransactionsSchema,
)
export default TransactionsModel
