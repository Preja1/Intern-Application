const { User } = require("../model/UserModel");
const {setToken}=require("../authToken");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: { username, password },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = "admin-token-123";
    setToken(token);

    res.json({
      success: true,
      token: token,
      message: "Login successful",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
