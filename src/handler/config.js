export const mongo = {
  url: 'mongodb://crypto_news:xRtZ0wEcbvckcYfH@ds115569.mlab.com:15569/news_db'
}

export const BinanceApi = {
  apiKey: 'nCyqjFoRj3g06qCTVRojQogCjDRZNYJONCnhmf0qhsXkjgPNZrIP7ZuNe3e0Zww1',
  apiSecret: 'YiF4I2HxzruBnGFFkZBQSROPs77FRY0gcieaOaU4myAtkB3LDE9jithAUUf35wSa',
}

export const cointree = {
  BNB: ['RDN', 'AION', 'LTC', 'NEO', 'XLM', 'WAVES', 'NANO'],
  BTC: ['ETH', 'KNC', 'RDN', 'AION', 'LTC', 'NEO', 'XRP', 'BNB', 'XLM', 'WAVES', 'NANO'],
  ETH: ['RDN', 'AION', 'LTC', 'NEO', 'XRP', 'BNB', 'KNC', 'XLM', 'WAVES', 'OMG', 'NANO'],
  USDT: ['ETH', 'NEO', 'BNB'],
}

export const BINANCE = 'BINANCE'
export const exchanges = [
  BINANCE,
]

export const InfluxWalletsConfig = {
  host: 'influx-wallets.fiftyline.com',
  database: 'cryptocurrency',
  username: 'telegraf',
  password: 'twothousandandthree',
}

export const InfluxPricesConfig = {
  host: 'influx-prices.fiftyline.com',
  database: 'cryptocurrency',
  username: 'telegraf',
  password: 'twothousandandthree',
}
