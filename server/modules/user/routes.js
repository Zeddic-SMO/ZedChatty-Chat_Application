const userRoute = require("express").Router();
const { signup, signin } = require("./controller");

userRoute.post("/signup", signup);
userRoute.post("/signin", signin);

module.exports = userRoute;
