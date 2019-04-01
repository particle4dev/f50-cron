import test from 'tape'
import Middleware from '../../middleware'
import removeUserWithoutKey from '../remove-user-without-key'
import {users} from './fake-data'

const middleware = new Middleware()
function end(event, t, callback, next) {

  next()
}
middleware.use(removeUserWithoutKey)
middleware.use(end)

test('transform-data-to-points - pass', (t) => {
  t.plan(1)
  const event = {
    users,
  }

  function callback (err, res) {
    if(err) {
      t.fail(err)
    }
  }

  middleware.go(event, t, callback, (event) => {
    t.equal(event.users.length, 2)
  })
})
