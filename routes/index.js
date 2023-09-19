const express=require('express');

const router=express.Router();

const controller=require('../controllers/home_controller');

router.get('/',controller.home);
router.get('/game',controller.game);

router.use('/users',require('./users'));



console.log('route is loaded');

module.exports=router;