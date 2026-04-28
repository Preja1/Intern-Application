const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const Application = sequelize.define(
  "Application",
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    dob: DataTypes.STRING,
    course: DataTypes.STRING,
    education: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,

    resume: DataTypes.STRING,
    citizenship: DataTypes.STRING,
    collegeApplication: DataTypes.STRING,

    status: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
    },
    duration: {
      type: DataTypes.INTEGER,
    },

    durationRequest: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    durationStatus: {
      type: DataTypes.STRING,
      defaultValue: "None",
    },
  },
  {
    tableName: "Application",
    timestamps: false,
  },
);

module.exports = { Application };
