## State storage
terraform {
  backend "s3" {}
}

# create lambda function 
module "lambda" {
  source            = "/modules/terraform-lambda-function-task-module"
  service_name      = "${var.service_name}"
  environment       = "${var.environment}"
}

# create schedule
module "schedule_event" {
  source                    = "/modules/terraform-schedule-event-task-module"
  service_name              = "${var.service_name}"
  environment               = "${var.environment}"
  lambda_function_name      = "${module.lambda.function_name}"
  lambda_function_arn       = "${module.lambda.arn}"
}

