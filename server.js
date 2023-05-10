require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const DbConnect = require("./server/config/dbCon");
const userRoute = require("./server/modules/user/routes");

// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", userRoute);

// db connect
const port = process.env.PORT || 3001;
DbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`server runing on port ${port} and DB connected`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
