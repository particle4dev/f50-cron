**Test**

1. Copy and paste this in ../src/handler/index.js

```
import AWS from 'aws-sdk'
import fs from 'fs'
AWS.config.update({ region: 'us-east-1' })

const FILE = './static/daily-performance-report.html'

const sns = new AWS.SNS({
  apiVersion: '2010-03-31',
})

let payload = {
  default: JSON.stringify({
    to: [
      {
        email: `particle4dev@gmail.com`,
        name: `Hoang Nam`,
      }
    ],
    from: {
      name: "Daily Report"
    },
    
    // HTML body
    html: fs.readFileSync(FILE, 'utf8'), 
  })
}
payload = JSON.stringify(payload)
const params = {
  Message: payload,
  MessageStructure: 'json',
  TopicArn: 'arn:aws:sns:us-east-1:205098223684:sns-dev-fl-email-services', // FIXME
  Subject: 'Daily Performance Report',
}
sns.publish(params, (err, data) => {
  if (err) {
    debug(`fail install with ${err.message}`)
  } else {
    debug(`published`)
  }
})
```

2. Run

```
./bin/snail build && DEBUG=fl:* NODE_ENV=production ./docs/test-template.sh
```