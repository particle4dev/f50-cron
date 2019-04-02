variable "region" {
  description = "The AWS region to create resources in."
  default     = "us-east-1"
}

variable "availability_zone" {
  description = "A list of Availability zones in the region"
  default     = [
    "us-east-1a",
    "us-east-1b",
    "us-east-1c",
    "us-east-1d",
    "us-east-1e",
    "us-east-1f"
  ]
}
