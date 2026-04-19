const express = require("express");
const { dbConnection ,sequelize} = require("./config/dbConnect");
const app = express();
const cors =require('cors');
const {loginRouter} = require("./router/LoginRouter");
const {authMiddleware}=require("./middleware/authMiddleware");
const { clearToken } = require("./authToken");
console.log("HELLO WORLD");
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}));

app.use('/api',loginRouter);
sequelize.sync();
app.get("/api/dashboard", authMiddleware,(req, res) => {
  res.json({ message: "Dashboard data from backend" });
});

app.post("/api/logout", (req, res) => {
  clearToken();
  res.json({
    message: "Logged out successfully",
  });
});

app.listen(3030, async () => {
  try {
    dbConnection();
    console.log("Server is running in port:3030");
  } catch (error) {
    console.error("Error server starting:", error);
  }
});
