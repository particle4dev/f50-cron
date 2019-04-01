import Middleware from './middleware'
import setContext from './middlewares/set-context'
import getUsers from './middlewares/get-users'
import getStories from './middlewares/get-stories-today'
import removeUserWithoutKey from './middlewares/remove-user-without-key'
import getWallet from './middlewares/get-wallet'
import sendSns from './middlewares/send-sns'

import end from './end'

export default function() {
  const middleware = new Middleware()
  middleware.use(setContext)
  middleware.use(getUsers)
  middleware.use(getStories)
  middleware.use(removeUserWithoutKey)
  middleware.use(getWallet)
  middleware.use(sendSns)

  middleware.use(end)
  return middleware
}
