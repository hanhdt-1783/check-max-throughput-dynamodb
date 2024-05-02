const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-2" });
const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

const params = {
  AttributeDefinitions: [
    {
      AttributeName: "Artist",
      AttributeType: "S",
    },
    {
      AttributeName: "SongTitle",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "Artist",
      KeyType: "HASH",
    },
    {
      AttributeName: "SongTitle",
      KeyType: "RANGE",
    },
  ],
  TableName: "Music",
  BillingMode: "PAY_PER_REQUEST",
};

ddb.createTable(params, function (err, data) {
  if (err) console.log("error: ", err);
  else console.log("data: ", data);
});
