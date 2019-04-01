import pipeline from './pipeline'
import './utils'

const debug = require('debug')('fl:handler:index')

async function handler(event, context, callback) {
  debug('start')

  const p = pipeline()
  p.go(event, context, callback, () => {})
}

exports.handler = handler
