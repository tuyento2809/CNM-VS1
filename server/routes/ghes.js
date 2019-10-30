const express= require('express');
const router= express.Router();
const Ghe= require('../models/ghe')

const GheCtrl= require('../controllers/ghe')


router.post('',GheCtrl.themGhe);

router.get('',GheCtrl.getGhe);

router.get('/:id',GheCtrl.getGheById);



module.exports= router;