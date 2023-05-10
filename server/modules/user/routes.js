const userRoute = require("express").Router();
const { signup } = require("./controller");

userRoute.post("/signup", signup);

module.exports = userRoute;
