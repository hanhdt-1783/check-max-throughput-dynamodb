const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-northeast-1" });
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

const params = {
  TableName: "dev-svn-test-max-throughput",
  Key: {
    itemId: "item-1",
  },
};
let promiseArray = [];

for (let i = 0; i < 2000; i++) {
  const promise = docClient.get(params).promise();
  promiseArray.push(promise);
}

Promise.all(promiseArray)
  .then(() => {
    console.log("---> DONE");
  })
  .catch((error) => {
    console.error("---> ERROR", error.message);
  });
