const AWS = require('aws-sdk');
var s3 = new AWS.S3();

let readBucketData = async (params) => {
//   try {
//       let jsonObject =  await s3.getObject(params);
//       console.log(jsonObject);
//      // let jsonFile = jsonObject['body'].
//      return true;
//   } catch (e) {
//       console.log(e);
//   }
}

exports.handler = async (event) => {
    // TODO implement
    if (event['Records']) {
        //   console.log(event['Records'][0]['s3']['object']);
        let bucket_name = event['Records'][0]['s3']['bucket']['name'];
        let json_file_name = event['Records'][0]['s3']['object']['key'];
        let params = {
            Bucket: bucket_name,
            Key: json_file_name,
        };
        // let getFileContent = await readBucketData(params);
        s3.getObject(params, function (err, data) {

            if (err) {
                console.log(err);
            } else {
                console.log(data.Body.toString()); //this will log data to console
            }
        });
    }


    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!')
    };
    return response;
};
