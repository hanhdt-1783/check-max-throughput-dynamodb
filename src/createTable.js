const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-northeast-1" });
const ddb = new AWS.DynamoDB({ apiVersion: "latest" });

const params = {
  AttributeDefinitions: [
    {
      AttributeName: "itemId",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "itemId",
      KeyType: "HASH",
    }
  ],
  TableName: "dev-svn-test-max-throughput",
  BillingMode: "PAY_PER_REQUEST",
};

ddb.createTable(params, function (err, data) {
  if (err) console.log("error: ", err);
  else console.log("data: ", data);
});
