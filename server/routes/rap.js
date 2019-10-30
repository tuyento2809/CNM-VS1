const express= require('express');
const router= express.Router();
const Rap= require('../models/rap')

const RapCtrl= require('../controllers/rap')


router.post('',RapCtrl.themRap);

router.get('',RapCtrl.getRap);

router.get('/:id',RapCtrl.getRapById);



module.exports= router;