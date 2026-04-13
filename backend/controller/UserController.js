const { User } = require("../model/UserModel");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: { username, password }
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    res.json({
      success: true,
      message: "Login successful"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};