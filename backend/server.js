const express = require("express");
const { dbConnection } = require("./config/dbConnect");
const app = express();
const cors =require('cors');
console.log("HELLO WORLD");

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}));

app.get("/api/dashboard", (req, res) => {
  res.json({ message: "Dashboard data from backend" });
});
app.listen(3030, async () => {
  try {
    dbConnection();
    console.log("Server is running in port:3030");
  } catch (error) {
    console.error("Error server starting:", error);
  }
});
