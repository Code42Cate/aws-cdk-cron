import { Stack, StackProps, Duration } from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { Rule, Schedule } from "aws-cdk-lib/aws-events";
import { LambdaFunction, addLambdaPermission } from "aws-cdk-lib/aws-events-targets";

export class AwsCronStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create an event that gets triggered every 5 minutes
    const event = new Rule(this, "Cron5MinuteRule", {
      schedule: Schedule.rate(Duration.minutes(5)),
      description: "Trigger the lambda function every 5 minutes",
    });

    // lambda that will be executed
    const lambda = new NodejsFunction(this, "Cron5MinuteLambda", {
      entry: "lib/lambda/index.ts",
      bundling: {
        minify: true,
        tsconfig: "./tsconfig.json",
      },
      functionName: "Cron5MinuteFunction",
      description: "Triggered every 5 minutes.",
      timeout: Duration.seconds(3),
      runtime: Runtime.NODEJS_18_X,
    });

    // trigger lambda on 5 minute rule
    event.addTarget(new LambdaFunction(lambda));

    // allow lambda to be triggered by event
    addLambdaPermission(event, lambda);
  }
}
