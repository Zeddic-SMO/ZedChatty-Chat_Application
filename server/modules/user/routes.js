const userRoute = require("express").Router();
const { signup, signin, getUser, updateUser } = require("./controller");

userRoute.post("/signup", signup);
userRoute.post("/signin", signin);
userRoute.get("/user", getUser);
userRoute.put("/user", updateUser);

module.exports = userRoute;
