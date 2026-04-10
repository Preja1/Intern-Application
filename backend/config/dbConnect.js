const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("InternDb", "root", "admin123", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  });
const dbConnection = async() => {
  
  try {
  await sequelize.authenticate();
  console.log('Db Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
// console.log("Connect Db Complete.")
};

module.exports={dbConnection};