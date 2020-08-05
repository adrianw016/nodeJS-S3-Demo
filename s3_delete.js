var AWS = require('aws-sdk')
const fs = require('fs')

const BUCKET = process.env.BUCKET
const REGION = process.env.REGION
const ACCESS_KEY = process.env.ACCESS_KEY
const SECRET_KEY = process.env.SECRET_KEY

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION
})

var s3 = new AWS.S3()

const params = {
  Bucket: BUCKET,
  Key: '1586934598919', // image fileName
}

s3.deleteObject(params, (err, data) => {
  if (err) { return console.log(err) }
  
  // Continue if no error
  // Save data.Location in your database
  console.log('Image successfully deleted.');
  console.log(data);

});
