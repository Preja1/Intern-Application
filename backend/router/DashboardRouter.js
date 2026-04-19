const express=require("express");
const DashboardRouter=express.Router();
const DashboardController=require('../controller/DashboardController');


DashboardRouter.get('/dashboard',DashboardController.login);

module.exports={DashboardRouter};