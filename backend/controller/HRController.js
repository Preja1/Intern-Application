const { Application } = require("../model/ApplicationModel");


exports.approveDuration = async (req, res) => {
  try {
    const app = await Application.findByPk(req.params.id);

    await app.update({
      duration: app.durationRequest,
      durationRequest: null,
      durationStatus: "Approved",
    });

    res.json({ success: true, message: "Duration Approved by HR" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.rejectDuration = async (req, res) => {
  try {
    const app = await Application.findByPk(req.params.id);

    await app.update({
      durationRequest: null,
      durationStatus: "Rejected",
    });

    res.json({ success: true, message: "Request Rejected by HR" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};