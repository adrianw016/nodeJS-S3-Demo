var AWS = require('aws-sdk')
const fs = require('fs')

const BUCKET = process.env.BUCKET
const REGION = process.env.REGION
const ACCESS_KEY = process.env.ACCESS_KEY
const SECRET_KEY = process.env.SECRET_KEY

const localImage = './btc.jpg'
const imageRemoteName = `${new Date().getTime()}`

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION
})

var s3 = new AWS.S3()

const params = {
  Bucket: BUCKET,
  Key: imageRemoteName,
  Body: fs.readFileSync(localImage),
  ACL: 'public-read',
  // ContentEncoding: 'base64', // required
  ContentType: `image/jpeg`
}

s3.upload(params, (err, data) => {
  if (err) { return console.log(err) }
  
  // Continue if no error
  // Save data.Location in your database
  console.log('Image successfully uploaded.');
  console.log(data);
  
});

