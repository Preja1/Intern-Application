const express = require("express");
const { dbConnection ,sequelize} = require("./config/dbConnect");
const app = express();
const cors =require('cors');
const {loginRouter} = require("./router/LoginRouter");
const {authMiddleware}=require("./middleware/authMiddleware");
const { clearToken } = require("./authToken");
const { applicationRouter } = require("./router/ApplicationRouter");
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
// routes
app.use("/api", applicationRouter);

// serve files
app.use("/uploads", express.static("uploads"));

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
