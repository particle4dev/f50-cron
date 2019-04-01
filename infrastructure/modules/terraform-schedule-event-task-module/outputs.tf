output "cloudwatch_event_rule_name" {
  value = "${aws_cloudwatch_event_rule.cloudwatch_event_rule.name}"
}