require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const DbConnect = require("./server/config/dbCon");
const userRoute = require("./server/modules/user/routes");
const ConversationRoutes = require("./server/modules/conversation/ConversationRoute");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1", userRoute, ConversationRoutes);

// Set  up for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else
  app.get("/", (req, res) => {
    res.send("...Welcome ZedChatty App API...");
  });

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
