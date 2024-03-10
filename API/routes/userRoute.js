const express=require('express');
const UserRouter =express.Router();
const  {
    login,signup}
    =require('../controllers/userControllers')

UserRouter.post('/signup',signup);
UserRouter.post('/login',login)

//if you need to import it
module.exports=UserRouter