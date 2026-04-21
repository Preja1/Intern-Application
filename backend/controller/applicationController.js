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
exports.getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;

    const app = await Application.findByPk(id);

    if (!app) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      success: true,
      data: app,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const app = await Application.findByPk(id);

    if (!app) {
      return res.status(404).json({ message: "Not found" });
    }

    const updatedData = {
      firstName: req.body.firstName || app.firstName,
      lastName: req.body.lastName || app.lastName,
      email: req.body.email || app.email,
      phone: req.body.phone || app.phone,
      dob: req.body.dob || app.dob,
      course: req.body.course || app.course,
      education: req.body.education || app.education,
      startDate: req.body.startDate || app.startDate,
      endDate: req.body.endDate || app.endDate,

      resume: req.files?.resume?.[0]?.filename || app.resume,
      citizenship: req.files?.citizenship?.[0]?.filename || app.citizenship,
      collegeApplication:
        req.files?.collegeApplication?.[0]?.filename || app.collegeApplication,
    };

    await app.update(updatedData);

    res.json({
      success: true,
      message: "Updated successfully",
      data: app,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};