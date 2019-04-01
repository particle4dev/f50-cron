import mongoose from 'mongoose'
import connectPrimaryData from './connect/mongoose'

// STATUS
const ACTIVE = 'active'
const LOCKED = 'locked'
const DEACTIVATED = 'deactivated'
const PENDING_ACTIVATION = 'pending_activation'
const STATUS = [ACTIVE, LOCKED, DEACTIVATED, PENDING_ACTIVATION]

// GENDER
const MALE = 'male'
const FEMALE = 'female'
const GENDER = [MALE, FEMALE]

// USER ROLES
const GUEST = 'guest'
const BOT = 'bot'
const USER = 'user'
const ADMIN = 'admin'
const SUPERADMIN = 'superadmin'
const ROLES = [GUEST, BOT, USER, ADMIN, SUPERADMIN]

const { Schema } = mongoose
// const { Types: { ObjectId } } = Schema

function rolesvalidator(v) {
  return v.every(val => !!~ROLES.indexOf(val)) // eslint-disable-line no-bitwise
}

const EmailSchema = new Schema({
  address: {
    type: String,
    required: true,
    sparse: true,
  },
  verified: {
    type: Boolean,
    required: true,
  },
}, {
  _id: false,
})

const ProfileSchema = new Schema({
  firstName: String,
  lastName: String,
  gender: {
    type: String,
    enum: GENDER,
    default: MALE,
  },
}, {
  _id: false,
})

const BinanceSchema = new Schema({
  apiKey: {
    type: String,
  },
  apiSecret: {
    type: String,
  },
}, {
  _id: false,
})

const UsersSchema = new Schema({
  emails: [EmailSchema],

  profile: ProfileSchema,

  picture: String,
  services: {
    facebook: {
      id: String,
      accessToken: String,
      tokenExpire: Date,
    },
  },
  roles: {
    required: true,
    type: [String],
    validate: rolesvalidator,
    default: [USER],
  },
  status: {
    type: String,
    enum: STATUS,
    default: ACTIVE,
  },

  binance: BinanceSchema,

}, { timestamps: true })

// indexes
// UsersSchema.index({
//   'title': 1
// });

// plugins
// UsersSchema.plugin(timestamps)

// methods
// UsersSchema.statics.createANewToken = function () {}

let model = null

export default function () {
  return new Promise(async (resolve, reject) => {
    try {
      if(mongoose.connection.readyState !== 1 || mongoose.connection.readyState !== 2) {
        model = null
        const conn = await connectPrimaryData()
        model = mongoose.model('Users', UsersSchema)
      }
      resolve(model)
    } catch (err) {
      reject(err)
    }
  })
}
