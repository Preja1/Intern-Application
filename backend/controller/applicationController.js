const { Application } = require("../model/ApplicationModel");

exports.createApplication = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const newApp = await Application.create({
      ...req.body,
      resume: req.files.resume?.[0]?.filename,
      citizenship: req.files.citizenship?.[0]?.filename,
      collegeApplication: req.files.collegeApplication?.[0]?.filename,
    });

    res.json({
      success: true,
      message: "Application submitted",
      data: newApp,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const data = await Application.findAll({
      order: [["id", "DESC"]],
    });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};