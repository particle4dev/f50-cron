import { InfluxDB, FieldType } from 'influx'
import { InfluxWalletsConfig as influxdb } from '../../config'

const walletMeasurement = new InfluxDB({
  host: influxdb.host,
  database: influxdb.database,
  username: influxdb.username,
  password: influxdb.password,
  schema: [
    {
      measurement: 'Wallet',
      fields: {
        quantity: FieldType.FLOAT,
        eth: FieldType.FLOAT,
        usdt: FieldType.FLOAT,
        btc: FieldType.FLOAT,
        neo: FieldType.FLOAT,
        bch: FieldType.FLOAT,
        ltc: FieldType.FLOAT,
        ada: FieldType.FLOAT,
        bnb: FieldType.FLOAT,
      },
      tags: [
        'id',
        'symbol',
        'userId',
        'exchange',
      ],
    },
  ],
})

export default walletMeasurement
