const express = require("express");
const applicationRouter = express.Router();

const upload = require("../middleware/upload");
const { createApplication,getApplications,getApplicationById,updateApplication } = require("../controller/ApplicationController");

applicationRouter
.post(
  "/application",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "citizenship", maxCount: 1 },
    { name: "collegeApplication", maxCount: 1 },
  ]),
  createApplication
)
applicationRouter.get("/applications", getApplications);
applicationRouter.get("/application/:id", getApplicationById);
applicationRouter.put(
  "/application/:id",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "citizenship", maxCount: 1 },
    { name: "collegeApplication", maxCount: 1 },
  ]),
  updateApplication
);


module.exports = { applicationRouter};