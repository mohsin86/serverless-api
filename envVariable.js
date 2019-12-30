'use strict';

module.exports.howToTakeEnv = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
        googleEng: 'This is from env'+ process.env.GOOGLE_MAP_API,
        OTHER_API_KEY: 'This is from env'+ process.env.OTHER_API_KEY,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
