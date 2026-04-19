const {getToken}=require("../authToken");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const activeToken=getToken();

  if (!token || token !== activeToken) {
    return res.status(401).json({
      message: "Please login first",
    });
  }

  next();
}

module.exports = { authMiddleware };