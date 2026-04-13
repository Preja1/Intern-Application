const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/dbConnect");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
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