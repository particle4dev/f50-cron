**Installation**

1. Initialize a working directory containing Terraform configuration files<br />
```
./bin/snail init
```

1. To build the lambda function, for compilation, deployment.
```
./bin/snail build && DEBUG=fl:* NODE_ENV=production node ./build/index.js && ./bin/snail deploy
```

1. Apply the changes required to reach the desired state of the configuration.
```
./bin/snail deploy
```

**Send SNS message**

```

aws sns publish \
  --topic-arn arn:aws:sns:us-east-1:205098223684:sns-dev-fl-sync-wallet \
  --message “message.txt” \
  --subject Test
```

**Remove the installation**

1. To destroy the Terraform-managed infrastructure.
```
./bin/snail destroy
```

**Start development env**

1.
```
./bin/snail start
```

```
./bin/snail stop && ./bin/snail start && ./bin/snail logs -f
```
