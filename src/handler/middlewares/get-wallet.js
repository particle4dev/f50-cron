import find from 'lodash/find'
import {walletMeasurement} from '../connect/influxdb'

const debug = require('debug')('fl:middlewares:get-wallet')

export function caculateChange24H(groups1, groups2) {
  let g1 = groups1.map(e => e.rows[0]).filter(e => e.usdt > 1)
  let g2 = groups2.map(e => e.rows[0]).filter(e => e.usdt > 1)
  g1 = g1.map(e => {
    const c = find(g2, v => v.symbol === e.symbol)
    if(!c) {
      // not found
      e.change24H = {
        eth: e.eth,
        usdt: e.usdt,
        btc: e.btc,
        neo: e.neo,
        bch: e.bch,
        ltc: e.ltc,
        ada: e.ada,
        bnb: e.bnb,
      }
    } else {
      e.change24H = {
        eth: e.eth - c.eth,
        usdt: e.usdt - c.usdt,
        btc: e.btc - c.btc,
        neo: e.neo - c.neo,
        bch: e.bch - c.bch,
        ltc: e.ltc - c.ltc,
        ada: e.ada - c.ada,
        bnb: e.bnb - c.bnb,
      }
    }
    return e
  })
  return g1
}

async function get(users, i, next) {
  if (i === users.length) {
    return next()
  }
  const user = users[i]
  let query1 = `
    SELECT "exchange",
    "quantity",
    "eth",
    "usdt",
    "btc",
    "neo",
    "bch",
    "ltc",
    "ada",
    "bnb" FROM "cryptocurrency"."autogen"."Wallet" WHERE "userId" = '${user._id}' GROUP BY "symbol","id","userId" ORDER BY DESC LIMIT 1
  `
  const result1 = await walletMeasurement.query(query1)
  const groups1 = result1.groups()

  let query2 = `
    SELECT "exchange",
    "quantity",
    "eth",
    "usdt",
    "btc",
    "neo",
    "bch",
    "ltc",
    "ada",
    "bnb" FROM "cryptocurrency"."autogen"."Wallet" WHERE "time" < now() - 24h AND "userId" = '${user._id}' GROUP BY "symbol","id","userId" ORDER BY DESC LIMIT 1
  `
  const result2 = await walletMeasurement.query(query2)
  const groups2 = result2.groups()

  let wallet = caculateChange24H(groups1, groups2)
  let total = find(wallet, v => v.symbol === 'total')
  
  // REMOVE COIN under $1
  wallet = wallet.filter(v => v.usdt > 1)

  users[i].wallet = wallet
  users[i].total = total

  return get(users, i+1, next)
}

export default async function getWallet(event, context, callback, next) {
  debug('')
  try {
    get(event.users, 0, next) 
  } catch (err) {
    callback(err, null)
  }
}
