const mongoose = require("mongoose");

const DATABASE_URI = process.env.MONGO_URL;

const DbConnect = () => {
  return mongoose.connect(DATABASE_URI);
};

module.exports = DbConnect;
