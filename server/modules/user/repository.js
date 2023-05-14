const { User } = require("./schema");

/**
 * @Desc: Check if email or username already exists
 */
exports.checkIfExists = async (data) => {
  try {
    // return await User.findOne({ email: data.email });
    return await User.findOne({
      $or: [
        { email: data.email },
        { username: data.username },
        { _id: data.id },
      ],
    });
  } catch (err) {
    throw err;
  }
};

exports.usernameExist = async (data) => {
  try {
    return await User.findOne({ username: data.username });
  } catch (err) {
    throw err;
  }
};

/**
 * @param {Object} data - user object
 * @returns A database object from mongodb
 */
exports.createNewUser = async (username, email, password) => {
  try {
    // Instantiate a new instance of the User model
    let newUser = new User({
      username,
      email,
      password,
    });

    //   save records
    await newUser.save();

    newUser = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    };

    return newUser;
  } catch (err) {
    throw err;
  }
};
