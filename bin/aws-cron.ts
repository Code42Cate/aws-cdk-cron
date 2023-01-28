#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AwsCronStack } from "../lib/aws-cron-stack";
import config from "../config";

const app = new cdk.App();
new AwsCronStack(app, "AwsCronStack", {
  env: { account: config.account, region: config.region },
});
