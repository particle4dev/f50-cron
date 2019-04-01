const debug = require('debug')('fl:middlewares:remove-user-without-key')

export default async function removeUserWithoutKey(event, context, callback, next) {
  debug('')

  const users = event.users.filter(b => (!!b.emails[0])).map(e => {
    if(e && e.toObject) return e.toObject()
    return e
  })
  event.users = users

  next()
}
