const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

exports.generateVerificationLink = async (user) => {
  const token = jwt.sign(user, SECRET, { expiresIn: "24h" });
  const HOST = process.env.HOST || `http://localhost:3001`;
  const link = `${HOST}//api/v1/user/verify-me/${token}`;
  return link;
};
