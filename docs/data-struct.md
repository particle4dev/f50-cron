### Transactions Collection <Mongodb>

```
  _id: ObjectID required

  orderId: Number unique DONE
  clientOrderId: String DONE
  status: String required DONE

  userId: ObjectID required indexed DONE
  exchange: String required indexed DONE

  symbol: String required indexed DONE
  side: String required indexed DONE
  type: String required indexed DONE
  from: String required indexed DONE
  to: String required indexed DONE

  price: Float DONE
  origQty: Float
  executedQty: Float
  timeInForce: String
  stopPrice: Float
  icebergQty: Float
  isWorking: Boolean

  timestamp: Date indexed DONE
  updatedAt: Date DONE
  createdAt: Date DONE
```

### SNS Message

Example:

```
{
  "Records": [{
    "EventSource": "aws:sns",
    "EventVersion": "1.0",
    "EventSubscriptionArn": "arn:aws:sns:us-east-1:205098223684:sns-dev-fl-sync-transactions:15984c32-5558-4423-a8b7-04c78c260686",
    "Sns": {
      "Type": "Notification",
      "MessageId": "7977da8e-5ec6-564b-97d0-89ec90dab967",
      "TopicArn": "arn:aws:sns:us-east-1:205098223684:sns-dev-fl-sync-transactions",
      "Subject": "Test",
      "Message": "“message.txt”",
      "Timestamp": "2018-05-01T20:19:40.720Z",
      "SignatureVersion": "1",
      "Signature": "wHwhb01cPx4GqPXRPPPhZFA2yYZ8AH+Y0/NTEqmSDcJB30gjWJsBi5wdxvYiphw/4D6EdLv9K7c1VoILAEgDQKDicQ8rZXllpbItPCK6yEYTeCoZA69N5vFZ/Pz/6cg7BgSr+CwOL2pxZsWfu8dBRIseLF4sFtv4ptiEljJdOyvowZIDYYQkQ9aNMIjasZxrLSAA/7RkvQ3aIhey5y5VDtEX1sz0fazCx1WkAIPWDLyIF/y/JT0zgGV60pDyYa7WOYMG2pAXnDoyGgXQQwShHKkxNTl4W/YIyg7VG7Bv0W0LLjQSfAtXk9w32cf0BbNpjHgQY2XYqKYNHW+zg2japw==",
      "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-eaea6120e66ea12e88dcd8bcbddca752.pem",
      "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:205098223684:sns-dev-fl-sync-transactions:15984c32-5558-4423-a8b7-04c78c260686",
      "MessageAttributes": {}
    }
  }]
}
```