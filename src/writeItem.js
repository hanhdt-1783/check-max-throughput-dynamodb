const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-2" });
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

const params = {
  TableName: "Music",
  Item: {
    Artist: "HuongTram",
    SongTitle: "EmGaiMua",
    Category: "Ballad",
  },
};

docClient.put(params, function (err, data) {
  if (err) console.log("error: ", err);
  else console.log("data: ", data);
});
