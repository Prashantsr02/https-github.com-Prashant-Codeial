const express=require('express');

const router=express.Router();

const userController=require('../controllers/users_controller');

router.get('/profiles', userController.profile);

router.get('/signup',userController.signup);
router.get('/signin',userController.signin);
router.post('/create', userController.create);
router.post('/create-session',userController.createsession);
// router.post('/auth',userController.auth);
module.exports=router;