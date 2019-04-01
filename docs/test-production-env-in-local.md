**Test**

1. Copy and paste this in ../src/handler/index.js

```
const event = {
  "version": "0",
  "id": "a87ad2a1-50fa-bb34-b0a7-5fee30e474ef",
  "detail-type": "Scheduled Event",
  "source": "aws.events",
  "account": "205098223684",
  "time": "2018-05-18T08:10:50Z",
  "region": "us-east-1",
  "resources": [
    "arn:aws:events:us-east-1:205098223684:rule/cloudwatch-event-rule-dev-fl-daily-reports"
  ],
  "detail": {}
}
handler(event, {}, (err, res) => {
  if(err) console.log(err)
  process.exit(0)
})
```

2. Run

```
./bin/snail build && DEBUG=fl:* NODE_ENV=production ./docs/test-production.sh
```