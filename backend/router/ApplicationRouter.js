const express = require("express");
const applicationRouter = express.Router();

const upload = require("../middleware/upload");
const { createApplication,getApplications } = require("../controller/ApplicationController");

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
.get("/applications", getApplications);


module.exports = { applicationRouter};