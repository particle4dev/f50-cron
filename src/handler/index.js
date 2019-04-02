const debug = require('debug')('fl:handler:index')

async function handler(event, context, callback) {
  debug('start')

  callback(null, 'finished')
}

exports.handler = handler
