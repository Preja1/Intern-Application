const express=require("express");
const userRouter=express.Router();
const UserController=require('../controller/UserController');


userRouter.post('/login',UserController.login);

module.exports={userRouter};