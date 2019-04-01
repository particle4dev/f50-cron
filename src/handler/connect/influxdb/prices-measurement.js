import { InfluxDB, FieldType } from 'influx'
import { InfluxPricesConfig as influxdb } from '../../config'

const pricesMeasurement = new InfluxDB({
  host: influxdb.host,
  database: influxdb.database,
  username: influxdb.username,
  password: influxdb.password,
  schema: [
    {
      measurement: 'Prices',
      fields: {
        price_usd: FieldType.FLOAT,
        price_btc: FieldType.FLOAT,
        name: FieldType.STRING,
        rank: FieldType.INTEGER,
        volume_usd_24h: FieldType.FLOAT,
        market_cap_usd: FieldType.INTEGER,
        available_supply: FieldType.FLOAT,
        total_supply: FieldType.FLOAT,
        // max_supply: FieldType.FLOAT,
        percent_change_1h: FieldType.FLOAT,
        percent_change_24h: FieldType.FLOAT,
        percent_change_7d: FieldType.FLOAT,

        priceETH: FieldType.FLOAT,
        priceUSDT: FieldType.FLOAT,
        priceBTC: FieldType.FLOAT,
        priceNEO: FieldType.FLOAT,
        priceBCH: FieldType.FLOAT,
        priceLTC: FieldType.FLOAT,
        priceADA: FieldType.FLOAT,
        priceBNB: FieldType.FLOAT,
      },
      tags: [
        'id',
        'symbol',
      ],
    },
  ],
})

export default pricesMeasurement
