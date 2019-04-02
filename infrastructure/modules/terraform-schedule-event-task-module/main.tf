resource "aws_lambda_permission" "lambda_permission" {
  statement_id  = "AllowExecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = "${var.lambda_function_name}"
  principal     = "events.amazonaws.com"
  source_arn    = "${aws_cloudwatch_event_rule.cloudwatch_event_rule.arn}"
}

resource "aws_cloudwatch_event_rule" "cloudwatch_event_rule" {
  name        = "${local.cloudwatch_event_rule}"

  schedule_expression = "cron(0 2 * * ? *)"
  # schedule_expression = "rate(5 minutes)"
}

resource "aws_cloudwatch_event_target" "cloudwatch_lambda_target" {
  rule      = "${aws_cloudwatch_event_rule.cloudwatch_event_rule.name}"
  target_id = "RunLambdaFunction"
  arn       = "${var.lambda_function_arn}"
}
