import AWS from 'aws-sdk'
import cache from '../lru-cache'

AWS.config.update({ region: 'us-east-1' })

const debug = require('debug')('fl:middlewares:set-context')

export default async function setContext(event, context, callback, next) {
  debug('')
  try {
    context.cache = cache
    context.sns = new AWS.SNS({
      apiVersion: '2010-03-31',
    })
    next()
  } catch (err) {
    callback(err, null)
  }
}
  