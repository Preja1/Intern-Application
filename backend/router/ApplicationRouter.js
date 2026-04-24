const express = require("express");
const applicationRouter = express.Router();

const upload = require("../middleware/upload");
const {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  updateStatus,
} = require("../controller/ApplicationController");

applicationRouter.post(
  "/application",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "citizenship", maxCount: 1 },
    { name: "collegeApplication", maxCount: 1 },
  ]),
  createApplication,
);
applicationRouter.get("/applications", getApplications);
applicationRouter.get("/application/:id", getApplicationById);
applicationRouter.put(
  "/application/:id",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "citizenship", maxCount: 1 },
    { name: "collegeApplication", maxCount: 1 },
  ]),
  updateApplication,
);
applicationRouter.delete("/application/:id", deleteApplication);
applicationRouter.put("/application/:id/status", updateStatus);

module.exports = { applicationRouter };
