import mongoose from 'mongoose'

const { Schema } = mongoose

const InformationsSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },

    symbol: {
      type: String,
      unique: true,
      required: true,
    },

    description: {
      type: String,
      // required: true,
    },

    features: {
      type: String,
      // required: true,
    },

    technology: {
      type: String,
      // required: true,
    },

    algorithm: {
      type: String,
    },

    proofType: {
      type: String,
    },

    startDate: {
      type: Date,
    },

    twitter: {
      type: String,
    },

    totalCoinSupply: {
      type: Number,
    },

    website: {
      type: String,
    },

    metaData: {
      type: String,
    },
    // name
  },
  { timestamps: true },
)

// indexes
InformationsSchema.index({
  id: 1,
  symbol: 1,
})

InformationsSchema.index({ createdAt: -1 })
InformationsSchema.index({ updatedAt: -1 })

// plugins
// InformationsSchema.plugin(timestamps)

// methods
// InformationsSchema.statics.createANewToken = function () {}

const InformationsModel = mongoose.model('Informations', InformationsSchema)

// setTimeout(async () => {
//   try {
//     await InformationsModel.remove({
//       symbol: 'btc',
//     })
//     const r = await InformationsModel.create({
//       symbol: 'btc',
//       algorithm: 'SHA256',
//       proofType: 'PoW',
//       totalCoinSupply: 21000000,
//       startDate: new Date('03/01/2009'),
//       website: 'https://bitcoin.org/en/',
//       twitter: 'bitcoin',
//       id: 'bitcoin',
//       description: '<p>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Although other cryptocurrencies have come before, Bitcoin is the first decentralized cryptocurrency - Its reputation has spawned copies and evolution in the space.</p><p>With the largest variety of markets and the biggest value - having reached a peak of 18 billion USD - Bitcoin is here to stay. As with any new invention, there can be improvements or flaws in the initial model however the community and a team of dedicated developers are pushing to overcome any obstacle they come across. It is also the most traded cryptocurrency and one of the main entry points for all the other cryptocurrencies. The price is as unstable as always and it can go up or down by 10%-20% in a single day.</p><p>Bitcoin is an SHA-256 POW coin with 21,000,000 total minable coins. The block time is 10 minutes. See below for a full range of Bitcoin markets where you can trade US Dollars for Bitcoin, crypto to Bitcoin and many other fiat currencies too.</p><p>Learn about the history of Bitcoin <a href=\"https://fried.com/history-of-bitcoin/\" target=\"_blank\">here</a> and check out 50 crazy-fun facts about Bitcoin <a href=\"https://bitcoinplay.net/58-insane-facts-about-bitocin/\" target=\"_blank\">here</a>!</p>',
//       features: '<p><strong>Mobile payments made easy</strong> Bitcoin on mobiles allows you to pay with a simple two step scan-and-pay. No need to sign up, swipe your card, type a PIN, or sign anything. All you need to receive Bitcoin payments is to display the QR code in your Bitcoin wallet app and let your friend scan your mobile, or touch the two phones together (using NFC radio technology).</p><p><strong>Security and control over your money</strong> Bitcoin transactions are secured by military grade cryptography. Nobody can charge you money or make a payment on your behalf. So long as you take the required steps to protect your wallet, Bitcoin can give you control over your money and a strong level of protection against many types of fraud.</p><p><strong>Works everywhere, anytime</strong> Just like with email, you don&#39;t need to ask your family to use the same software or the same service providers. Just let them stick to their own favorites. No problem there; they are all compatible as they use the same open technology. The Bitcoin network never sleeps, even on holidays!</p><p><strong>Fast international payments</strong> Sending bitcoins across borders is as easy as sending them across the street. There are no banks to make you wait three business days, no extra fees for making an international transfer, and no special limitations on the minimum or maximum amount you can send.</p><p><strong>Choose your own fees</strong> There is no fee to receive bitcoins, and many wallets let you control how large a fee to pay when spending. Most wallets have reasonable default fees, and higher fees can encourage faster confirmation of your transactions. Fees are unrelated to the amount transferred, so it&#39;s possible to send 100,000 bitcoins for the same fee it costs to send 1 bitcoin.</p><p><strong>Protect your identity</strong> With Bitcoin, there is no credit card number that some malicious actor can collect in order to impersonate you. In fact, it is even possible to send a payment without revealing your identity, almost just like with physical money. You should however take note that some effort can be required to protect your privacy.</p>',
//       technology: '<p><strong>Balances - block chain</strong> The block chain is a shared public ledger on which the entire Bitcoin network relies. All confirmed transactions are included in the block chain. This way, Bitcoin wallets can calculate their spendable balance and new transactions can be verified to be spending bitcoins that are actually owned by the spender. The integrity and the chronological order of the block chain are enforced with cryptography.</p><p><strong>Transactions - private keys</strong> A transaction is a transfer of value between Bitcoin wallets that gets included in the block chain. Bitcoin wallets keep a secret piece of data called a private key or seed, which is used to sign transactions, providing a mathematical proof that they have come from the owner of the wallet. The signature also prevents the transaction from being altered by anybody once it has been issued. All transactions are broadcast between users and usually begin to be confirmed by the network in the following 10 minutes, through a process called mining.</p><p><strong>Processing - mining</strong> Mining is a distributed consensus system that is used to confirm waiting transactions by including them in the block chain. It enforces a chronological order in the block chain, protects the neutrality of the network, and allows different computers to agree on the state of the system. To be confirmed, transactions must be packed in a block that fits very strict cryptographic rules that will be verified by the network. These rules prevent previous blocks from being modified because doing so would invalidate all following blocks. Mining also creates the equivalent of a competitive lottery that prevents any individual from easily adding new blocks consecutively in the block chain. This way, no individuals can control what is included in the block chain or replace parts of the block chain to roll back their own spends.</p>',

//     })
//     console.log(r)
//   } catch (err){
//     console.log(err)
//   }
// }, 3000)

export default InformationsModel
