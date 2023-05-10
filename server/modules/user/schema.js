const mongoose = require("mongoose");
const Joi = require("joi");

/**
 * @Desc: Database Schema
 */
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "All fields are required"],
    unique: [true, "Username already in use"],
  },
  email: {
    type: String,
    required: [true, "All fields are required"],
    unique: [true, "Email already in use"],
  },
  password: { type: String, required: [true, "All fields are required"] },
  fullName: { type: String },
  headLine: { type: String },
  followers: { type: Array, default: [] },
  following: { type: Array, default: [] },
  phoneNumber: { type: Number },
  location: { type: String },
  bio: { type: String },
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.model("user", UserSchema);

/**
 * @Desc: JOI validation
 */
const UserValidatorSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().required().min(6),
  repeat_password: Joi.ref("password"),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
}).with("password", "repeat_password");

module.exports = { User, UserValidatorSchema };
