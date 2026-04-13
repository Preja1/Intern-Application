const { sequelize } = require("./config/dbConnect");
const { User } = require("./model/UserModel");

async function createAdmin() {
  try {
    await sequelize.sync();

    const existing = await User.findOne({
      where: { username: "admin" }
    });

    if (!existing) {
      await User.create({
        username: "admin",
        password: "admin123"
      });
      console.log("Admin created");
    } else {
      console.log("Admin already exists");
    }
    process.exit(); // stop script
  } catch (error) {
    console.error(error);
  }
}
createAdmin();