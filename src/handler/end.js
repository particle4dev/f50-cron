const debug = require('debug')('serverless:middlewares:end')

export default async (event, context, callback, next) => {
  debug('')

  callback(null, 'finished')
}
