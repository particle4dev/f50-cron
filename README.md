<p align="center">
  <img src="./logo.jpg" width="150" />
</p>

<h1 align="center">
  f50-cron
  <br>
</h1>

<p align="center">
  Create your cronjob with Lambda and Cloudwatch in seconds
</p>

## Quick start

### Prerequisites

Following are the minimum tested versions for the tools and libraries you need for running this project:

- Docker: 18.09.2, build 6247962 or newer
- An AWS account

### Install

1.  Clone this repo using `git clone --depth=1 https://github.com/particle4dev/f50-cron.git <YOUR_PROJECT_NAME>`
2.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
3.  Run `./bin/snail init` to initialize a working directory containing Terraform configuration files<br />.
4. Run `./bin/snail build` to build the lambda function, for compilation, deployment.
5. Run `./bin/snail deploy` to apply the changes required to reach the desired state of the configuration.

Now you've just finished deploying a cronjob on AWS Lambda. 

## Built With

* [Terraform](https://www.terraform.io/) - Write, Plan, and Create Infrastructure as Code
* [Docker](https://www.docker.com/) - Build, secure and manage applications

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/particle4dev/f50-cron/releases). 

## Authors

* **Nam Hoang** - *Initial work* - [particle4dev](https://github.com/particle4dev)

See also the list of [contributors](AUTHORS) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
