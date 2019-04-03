locals {
  iam_role_name      = "iam-roles-${var.environment}-${var.service_name}"
  function_name      = "${var.environment}-${var.service_name}-function-lambda"
}
