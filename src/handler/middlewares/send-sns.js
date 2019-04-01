import pug from 'pug'
import isString from 'lodash/isString'
import {minify} from 'html-minifier'

// https://jsbin.com/qusodufugi/edit?html,output
const compiledFunction = pug.compileFile(`${__dirname}/../static/daily-reports.pug`)

const debug = require('debug')('fl:middlewares:send-sns')

function floor(number, after = 1) {
  const p = Math.pow(10, after)
  return Math.floor(number * p) / p
}

function format1(d) {
  let dd = d
  if (isString(d)) {
    dd = new Date(d)
  }
  return dd.formatDate('yyyy/MM/dd HH:mm:ss')
}

export function renderHTML (stories, total, wallet) {
  // wallet
  wallet = wallet.map(v => {
    v.eth = floor(v.eth, 4)
    v.btc = floor(v.btc, 4)
    v.usdt = floor(v.usdt, 2)
    v.percent = floor(v.usdt / total.usdt * 100)
    v.change24Hpercent = floor(v.change24H.usdt / v.usdt * 100)
    return v
  })

  total.eth = floor(total.eth, 4)
  total.btc = floor(total.btc, 4)
  total.usdt = floor(total.usdt, 2)
  total.time = format1(total.time)
  total.change24H.eth = floor(total.change24H.eth, 4)
  total.change24H.btc = floor(total.change24H.btc, 4)
  total.change24H.usdt = floor(total.change24H.usdt, 2)

  return minify(compiledFunction({
    total,
    wallet,
    head: stories.slice(0, 2),
    body1: stories.slice(2, 5),
    body2: stories.slice(5, 8),
    date: (new Date()).toDateString()
  }), {
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeAttributeQuotes: true
  })
}

async function send(users, stories, sns, i, next) {
  if (i === users.length) {
    return next()
  }
  const u = users[i]
  const { emails, profile } = u
  const email = emails[0]
  if(email.verified !== true) {
    return next()
  }
  let payload = {
    default: JSON.stringify({
      to: [
        {
          email: email.address,
          name: `${profile.lastName} ${profile.firstName}`,
        }
      ],
      from: {
        name: "Daily Report"
      },
      
      // HTML body
      html: renderHTML(stories, users[i].total, users[i].wallet.filter(e => e.symbol !== 'total')),
    })
  }
  payload = JSON.stringify(payload)
  const params = {
    Message: payload,
    MessageStructure: 'json',
    TopicArn: 'arn:aws:sns:us-east-1:205098223684:sns-dev-fl-email-services', // FIXME
    Subject: 'Daily Performance Report',
  }
  return sns.publish(params, (err, data) => {
    if (err) {
      debug(`fail install with ${u._id}, ${err.message}`)
      return send(users, stories, sns, i+1, next)
    }
    debug(`saved ${u._id}`)
    return send(users, stories, sns, i+1, next)
  })
}

export default async function sendSns(event, context, callback, next) {
  debug('')
  try {
    send(event.users, event.stories, context.sns, 0, next) 
  } catch (err) {
    callback(err, null)
  }
}
