import * as cdk from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import * as AwsThumbnail from "../lib/aws-cron-stack";

// Very minimal test to check basic stack creation, add more as needed.
test("Stack created", () => {
  const app = new cdk.App();
  const stack = new AwsThumbnail.AwsCronStack(app, "MyTestStack");
  const template = Template.fromStack(stack);

  // template has lambda function with layers and name
  template.hasResourceProperties(
    "AWS::Lambda::Function",
    Match.objectLike({
      FunctionName: "Cron5MinuteFunction",
    })
  );

  console.log(template.findResources("AWS::Events::Rule"));

  // validate that a rule exists that is triggering a lambda function
  template.hasResourceProperties(
    "AWS::Events::Rule",
    Match.objectLike({
      Targets: Match.arrayWith([Match.objectLike({ Arn: Match.anyValue() })]),
    })
  );
});
