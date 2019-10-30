const express= require('express');
const router= express.Router();
const TaiKhoanCtrl= require('../controllers/taikhoan')

const upload= require('../services/image-upload')

const singleUpload= upload.single('hinh')

//TaiKhoanCtrl.authMiddleware,
router.post('/image-upload',function(req,res){
  singleUpload(req,res,function(err){
      if(err){
        return res.status(422).send({errors: [{title: 'Image Upload Error',detail: err.message}]})
      }
      return res.json({imageUrl: req.file.location});
  })
});

module.exports= router;




