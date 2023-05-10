const { sendVerification } = require("./mail");

exports.sendVerificationEmail = async (
  username,
  userEmail,
  verificationLink
) => {
  return await sendVerification(username, userEmail, verificationLink);
};
