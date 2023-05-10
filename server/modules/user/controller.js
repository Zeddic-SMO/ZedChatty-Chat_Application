const { checkIfExists, usernameExist, createNewUser } = require("./repository");
const { validateInput } = require("../../utils/validator");
const { hashPassword } = require("../../utils/hasher");
const { UserValidatorSchema } = require("./schema");
const { generateVerificationLink } = require("../../utils/token");
const { sendVerificationEmail } = require("../../services/email");

/**
 *
 * @Desc: Sign up new users
 * @param {input} req
 */

exports.signup = async (req, res) => {
  try {
    let { username, email, password, repeat_password } = req.body;

    // validate input
    let isValid = await validateInput(UserValidatorSchema, {
      username,
      email,
      password,
      repeat_password,
    });
    if (!isValid) {
      throw new Error();
    }

    // check for duplicatecheck
    // check usename
    const usernameIsExists = await usernameExist(isValid);
    if (usernameIsExists) {
      throw new Error("Username already in use");
    }
    // check email
    let user = await checkIfExists(isValid);
    if (user) {
      throw new Error("Email already in use");
    }

    // Hash password
    password = await hashPassword(password);

    // create new user and save records to the database
    user = await createNewUser(username, email, password);

    // Generate Verification Link
    const verificationLink = await generateVerificationLink({ user: user._id });

    // Send verification email
    const emailSent = await sendVerificationEmail(
      user.username,
      user.email,
      verificationLink
    );
    if (emailSent.Message !== "OK") {
      throw new Error("Verification link not sent");
    }

    // response
    res.status(200).json({ status: "Verification Email Sent", user });
  } catch (error) {
    // Handle other errors here
    res.status(500).json(error.message);
  }
};

exports.signin = async (req, res) => {};
