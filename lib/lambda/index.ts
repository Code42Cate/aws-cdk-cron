import type { Handler } from "aws-lambda";

export const handler: Handler = async (event) => {
  return {
    statusCode: 200,
    body: {
      message: `Successfully ran lambda function at ${new Date().toISOString()}`,
    },
  };
};
