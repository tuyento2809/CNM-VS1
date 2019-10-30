const aws = require('aws-sdk')
const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')
const config= require('../config/dev');

aws.config.update({
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    sessionToken: config.aws_session_token,
    region: 'us-east-1'

})
 
//var app = express()
let s3 = new aws.S3();
let fileFilter = (req,file,cb)=>{

    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(new Error('Ivalid file type, only JPEG and PNG is allowed'),false)
    }
}
 
const upload = multer({
  fileFilter,

  storage: multerS3({
    s3: s3,
    bucket: 'quanly-banvexemphim1',
   acl: 'public-read',
   //ACL: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_METADATA'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})
 
module.exports= upload;
