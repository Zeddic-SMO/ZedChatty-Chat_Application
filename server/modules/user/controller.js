const repository = require("./repository");
const { validateInput } = require("../../utils/validator");
const passwordOperator = require("../../utils/hasher");
const { UserValidatorSchema } = require("./schema");
const tokenHandler = require("../../utils/token");
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

    // check for duplicate

    // check email and usename for duplicate
    let user = await repository.checkIfExists(isValid);
    if (user) {
      throw new Error("Email/Password already in use");
    }

    // Hash password
    password = await passwordOperator.hashPassword(password);

    // create new user and save records to the database
    user = await repository.createNewUser(username, email, password);

    /*
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
*/
    // response
    res.status(200).json({
      status: "success",
      message: "Registation Successful, Check your email to verify you account",
    });
  } catch (err) {
    // Handle other errors here
    res.status(501).json(err.message);
  }
};

exports.signin = async (req, res) => {
  try {
    // check if user exists in the database
    let user = await repository.checkIfExists(req.body);
    if (!user) {
      throw new Error("Invalid login credentials");
    }

    // check password
    const checkPassword = await passwordOperator.matchPassword(
      req.body.password,
      user.password
    );

    // Generate Access tokenHandler
    const access_token = await tokenHandler.generateAccessToken(user);

    // serialize user
    const { password, ...others } = user._doc;

    // success operation
    res.status(200).json({
      status: "Ok",
      message: "You're logged in now",
      user: { ...others },
      access_token,
    });
  } catch (err) {
    res.status(501).json(err.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const userId = req.query.userId;
    const user = await repository.checkIfExists({ id: userId });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};
