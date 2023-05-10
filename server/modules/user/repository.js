const { User } = require("./schema");

/**
 * @Desc: Check if user already exists
 */
exports.checkIfExists = async (data) => {
  /*   return await User.findOne({
    $or: [{ email: data.email }, { username: data.username }],
  }); */

  return await User.findOne({ email: data.email });
};

/**
 *
 * @param {Object} data
 * @returns
 */
exports.usernameExist = async (data) => {
  return await User.findOne({ username: data.username });
};

/**
 * @param {Object} data - user object
 * @returns A database object from mongodb
 */
exports.createNewUser = async (username, email, password) => {
  // Instantiate a new instance of the User model
  let newUser = new User({
    username,
    email,
    password,
  });

  //   save records
  newUser.save();
  if (!newUser) {
  }
  newUser = {
    _id: newUser._id,
    username: newUser.username,
    email: newUser.email,
  };

  return newUser;
};
