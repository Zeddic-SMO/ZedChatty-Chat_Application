const postmark = require("postmark");

exports.sendVerification = async (username, userEmail, verificationLink) => {
  const serverToken = process.env.EMAIL_SERVER_TOKEN;
  const client = new postmark.ServerClient(serverToken);

  try {
    const sentEmail = await client.sendEmail({
      From: process.env.EMAIL_SENDER,
      To: userEmail,
      Subject: "ZedChatty Account Verification",
      TextBody: `Hi, ${username}. Kindly click on the verification link to activate your account: ${verificationLink} `,
    });

    return sentEmail;
  } catch (error) {
    console.log(error.message);
  }
};
