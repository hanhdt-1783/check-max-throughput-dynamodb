const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-northeast-1" });
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

const params = {
  TableName: "dev-svn-test-max-throughput",
  Item: {
    itemId: "item-1",
    itemCount: 1
  },
};

docClient.put(params, function (err, data) {
  if (err) console.log("error: ", err);
  else console.log("data: ", data);
});
