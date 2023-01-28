# AWS CDK Lambda Cron Jobs

This is a very small and minimal example CDK project to create a lambda function that gets executed every 5 minutes.

**Note: This is not a production-ready solution.**


First, make sure that CDK is installed and configured/authenticated.
Then edit the `config.ts` file to set your account ID and region.

Then follow these steps:
```bash
npm install
cdk bootstrap
cdk synth
cdk deploy
```

## Useful commands

* `cdk bootstrap`   bootstrap this stack
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

* `npm run test`    perform the jest unit tests


## Components

The project consists of the following components:

* `config.ts` - contains the configuration for the project
* `bin/aws-cron.ts` - the main entry point for the CDK project
* `lib/aws-cron-stack.ts` - the main stack for the CDK project
* `lib/lambda/index.ts` - the lambda function that is executed every 5 minutes
* `test/aws-cron.test.ts` - the unit tests for the CDK project

## Stack

Deploying the stack will create the following resources:
* Rule that gets triggered every 5 minutes and executes the lambda function
* Lambda function to generate the thumbnails