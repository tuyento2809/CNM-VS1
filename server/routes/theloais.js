const express= require('express');
const router= express.Router();
const TheLoai= require('../models/theloai')

const TheLoaiCtrl= require('../controllers/theloai.js')


router.post('',TheLoaiCtrl.themTheLoai);

router.get('',TheLoaiCtrl.getTheLoai);

router.get('/:id',TheLoaiCtrl.getTheLoaiById);



module.exports= router;