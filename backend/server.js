const express = require("express");
const { dbConnection } = require("./config/dbConnect");
const app = express();
console.log("HELLO WORLD");



app.listen(3030, async () => {
  try {
    dbConnection();
    console.log("Server is running in port:3030");
  } catch (error) {
    console.error("Error server starting:", error);
  }
});
