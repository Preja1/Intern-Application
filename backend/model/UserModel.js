const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
    tableName:"UserLogin",
    timestamps:false,
});

module.exports ={User};