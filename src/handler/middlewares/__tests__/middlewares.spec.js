import test from 'tape'
import Middleware from '../../middleware'
import setContext from '../set-context'
import getUsers from '../get-users'
import getStories from '../get-stories-today'
import removeUserWithoutKey from '../remove-user-without-key'
import getWallet from '../get-wallet'
import sendSns from '../send-sns'

const middleware = new Middleware()
middleware.use(setContext)
middleware.use(getUsers)
middleware.use(getStories)
middleware.use(removeUserWithoutKey)
middleware.use(getWallet)
// middleware.use(sendSns)

function end(event, t, callback, next) {

  t.equal(true, true)
  next()
}

middleware.use(end)

test('sync-prices-middlewares - pass arg', (t) => {
  t.plan(1)
  function callback (err, res) {
    if(err) {
      t.fail(err)
    }
  }
  middleware.go({}, t, callback, (event) => {
    console.log(JSON.stringify(event.users))
  })
})
