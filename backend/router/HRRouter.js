const express = require("express");
const hrRouter = express.Router();

const {
  approveDuration,
  rejectDuration,
} = require("../controller/HRController");


hrRouter.put("/hr/approve/:id", approveDuration);
hrRouter.put("/hr/reject/:id", rejectDuration);

module.exports = { hrRouter};