const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-2" });
const docClient = new AWS.DynamoDB.DocumentClient();

let promiseArray = [];

for (let i = 0; i < 20; i++) {
  const params = {
    TableName: "Music",
    Key: {
      Artist: "HuongTram",
      SongTitle: "EmGaiMua",
    },
    UpdateExpression: "set Category = :category",
    ExpressionAttributeValues: {
      ":category": `Category-${i}`,
    },
    ReturnValues: "ALL_NEW",
  };
  const promise = docClient.update(params).promise();
  promiseArray.push(promise);
}

Promise.all(promiseArray).then(() => {
  console.log("---> DONE");
});
