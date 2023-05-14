const userRoute = require("express").Router();
const { signup, signin, getUser } = require("./controller");

userRoute.post("/signup", signup);
userRoute.post("/signin", signin);
userRoute.get("/user", getUser);

module.exports = userRoute;
