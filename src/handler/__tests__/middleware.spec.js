import test from 'tape'
import Middleware from '../middleware'

const middleware = new Middleware()

function end(event, context, t, next) {
  t.equal(event, 'EVENT')
  next()
}

middleware.use(end)

test('middleware - pass arg', (t) => {
  t.plan(2)
  const event = 'EVENT'
  const context = 'CONTEXT'

  middleware.go(event, context, t, () => {
    t.equal(context, 'CONTEXT')
  })
})
