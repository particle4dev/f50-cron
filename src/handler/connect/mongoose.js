import isFunction from 'lodash/isFunction'
import mongoose from 'mongoose'
import {mongo} from '../config'

const logger = require('debug')('fl:connect:mongoose')

// http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise

export function connect(uri, options, cb) {
  // NOTE:
  // createConnection use to multiple connections open to Mongo,
  // each with different read/write settings
  // This connection object is then used to create and retrieve models.
  // Models are always scoped to a single connection.
  // const connect = mongoose.createConnection(uri, options);

  mongoose.connect(uri, options)
  const conn = mongoose.connection

  // CONNECTION EVENTS
  // When successfully connected
  conn.on('connected', () => {
    logger(`Mongoose default connection open to ${uri}`)
    isFunction(cb) && cb(null, conn) // eslint-disable-line no-unused-expressions
  })

  // If the connection throws an error
  conn.on('error', (err) => {
    logger(`Failed to connect to DB ${uri} on startup ${err.message}`)
    isFunction(cb) && cb(err, null) // eslint-disable-line no-unused-expressions
  })

  // When the connection is disconnected
  conn.on('disconnected', () => {
    logger(`Mongoose disconnected to DB : ${uri}`)
  })

  const gracefulExit = () => {
    conn.close(() => {
      logger(`Mongoose default connection with DB : ${uri} is disconnected through app termination`)
      process.exit(0)
    })
  }
  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit)

  return conn
}

let connection = null

export function closeConnection() {
  if(connection) {
    mongoose.connection.close()
    connection = null
    logger('disconnected to DB')
  }
  return connection
}

/**
http://mongoosejs.com/docs/api.html#connection_Connection-readyState

Connection ready state

0 = disconnected
1 = connected
2 = connecting
3 = disconnecting
Each state change emits its associated event name.
 */
export default function connectPrimaryData() {
  return new Promise((resolve, reject) => {
    if(mongoose.connection.readyState !== 1 && mongoose.connection.readyState !== 2) {
      if(connection) {
        closeConnection()
      }
      connection = connect(mongo.url, {}, (err, conn) => {
        if(err) {
          reject(err)
        } else {
          resolve(conn)
        }
      })
    } else {
      resolve(connection)
    }
  })
}
