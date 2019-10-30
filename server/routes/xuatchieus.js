const express= require('express');
const router= express.Router();
const XuatChieu= require('../models/xuatchieu')

const XuatChieuCtrl= require('../controllers/xuatchieu.js')


router.post('',XuatChieuCtrl.themXuatChieu);

router.get('',XuatChieuCtrl.getXuatChieu);

router.get('/:id',XuatChieuCtrl.getXuatChieuById);



module.exports= router;