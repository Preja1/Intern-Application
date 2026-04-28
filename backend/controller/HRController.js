const { Application } = require("../model/ApplicationModel");


exports.approveDuration = async (req, res) => {
  try {
    const app = await Application.findByPk(req.params.id);

    const start = new Date(app.startDate);

    start.setMonth(
      start.getMonth() + Number(app.durationRequest)
    );

    const newEndDate =
      start.toISOString().split("T")[0];

    await app.update({
      duration: app.durationRequest,
      endDate: newEndDate,
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