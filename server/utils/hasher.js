const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

exports.matchPassword = async (incomingPassword, existingPassword) => {
  return bcrypt.compare(incomingPassword, existingPassword);
};
