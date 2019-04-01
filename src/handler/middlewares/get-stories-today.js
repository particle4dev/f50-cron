import StoriesModel from '../stories-model'

const debug = require('debug')('fl:middlewares:get-stories')

export default async function getStories(event, context, callback, next) {
  try {
    debug('')
    const model = await StoriesModel()
    const d = new Date()
    d.setHours(d.getHours() - 24)

    event.stories = await model.find({
      publishedAt: {$gt: d},
    }).sort({
      publishedAt: -1,
    })

    next()
  } catch (err) {
    debug(err.message)
    callback(err, null)
  }
}
