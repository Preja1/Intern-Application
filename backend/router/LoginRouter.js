const express=require("express");
const loginRouter=express.Router();
const LoginController=require('../controller/LoginController');


loginRouter.post('/login',LoginController.login);

module.exports={loginRouter};