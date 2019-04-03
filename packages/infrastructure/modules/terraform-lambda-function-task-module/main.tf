data "template_file" "lambda_role_policy" {
  template = "${file("${path.module}/templates/lambda_role_policy.json")}"
}

data "template_file" "iam_role_policy" {
  template = "${file("${path.module}/templates/iam_role_policy.json")}"
}

resource "aws_iam_role" "iam_role" {
  name = "${local.iam_role_name}"

  assume_role_policy = "${data.template_file.lambda_role_policy.rendered}"
}

resource "aws_iam_role_policy" "iam_role_policy" {
  name = "iam_role_policy"
  role = "${aws_iam_role.iam_role.id}"

  policy = "${data.template_file.iam_role_policy.rendered}"
}

data "archive_file" "lambda_function_file" {
  type          = "zip"
  source_dir    = "/lambda"
  output_path   = "lambda_function.zip"
}

resource "aws_lambda_function" "lambda_function" {
  filename         = "lambda_function.zip"
  function_name    = "${local.function_name}"
  role             = "${aws_iam_role.iam_role.arn}"
  handler          = "index.handler"
  source_code_hash = "${data.archive_file.lambda_function_file.output_base64sha256}"
  runtime          = "nodejs6.10"
  timeout          = 300
  memory_size      = 128
  # vpc_config       = {
  #   subnet_ids      = "${var.subnets}"
  #   security_group_ids = "${var.security_group}"
  # }
  environment {
    variables = {
      DEBUG = "fl:*"
    }
  }
}
