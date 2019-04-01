import UsersModel from '../users-model'

const debug = require('debug')('fl:middlewares:get-users')

export default async function getUsers(event, context, callback, next) {
  try {
    debug('')
    const model = await UsersModel()
    event.users = await model.find({})

    next()
  } catch (err) {
    debug(err.message)
    callback(err, null)
  }
}
