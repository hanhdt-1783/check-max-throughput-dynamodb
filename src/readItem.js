const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-2" });
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

const params = {
  TableName: "Music",
  Key: {
    Artist: "HuongTram",
    SongTitle: "EmGaiMua",
  },
  ProjectionExpression: "Category",
  ReturnConsumedCapacity: "TOTAL",
};
let promiseArray = [];

for (let i = 0; i < 20; i++) {
  const promise = docClient.get(params).promise();
  promiseArray.push(promise);
}

Promise.all(promiseArray).then(() => {
  console.log("---> DONE");
});
