const express= require('express');
const router= express.Router();
const TaiKhoan= require('../controllers/taikhoan')

router.post('/auth',TaiKhoan.auth);

router.post('/register', TaiKhoan.register);

router.get('',TaiKhoan.getAuth)

module.exports= router;