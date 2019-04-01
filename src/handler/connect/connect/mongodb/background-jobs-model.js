import mongoose from 'mongoose'

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

// STATUS
const SUBMITTED = 'SUBMITTED'
const PENDING = 'PENDING'
const RUNNABLE = 'RUNNABLE'
const STARTING = 'STARTING'
const RUNNING = 'RUNNING'
const SUCCEEDED = 'SUCCEEDED'
const FAILED = 'FAILED'

const STATUS = [SUBMITTED, RUNNING, SUCCEEDED, FAILED]

const BackgroundJobsSchema = new Schema(
  {
    userId: {
      type: ObjectId,
      required: true,
    },
    status: {
      type: String,
      enum: STATUS,
      default: SUBMITTED,
    },
    task: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

// indexes
BackgroundJobsSchema.index({
  id: 1,
  userId: 1, // userId.status ???
})

BackgroundJobsSchema.index({ createdAt: -1 })
BackgroundJobsSchema.index({ updatedAt: -1 })

// plugins
// BackgroundJobsSchema.plugin(timestamps)

// methods
// BackgroundJobsSchema.statics.createANewToken = function () {}

const BackgroundJobsModel = mongoose.model('BackgroundJobs', BackgroundJobsSchema)

export default BackgroundJobsModel
