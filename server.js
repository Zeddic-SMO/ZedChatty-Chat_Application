require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const app = express();
const path = require("path");

// Middlewares
const cors = require("cors");
const morgan = require("morgan");

// socket server with express
const httpServer = createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// imported files
const socketOperations = require("./server/socket");
const DbConnect = require("./server/config/dbCon");
const userRoute = require("./server/modules/user/routes");
const ConversationRoutes = require("./server/modules/conversation/ConversationRoute");
const MessageRoute = require("./server/modules/message/MessageRoute");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1", userRoute, ConversationRoutes, MessageRoute);

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

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("addUser", (userId) => {
    // add a user and return an array of users
    const users = socketOperations.addUser(userId, socket.id);
    // io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    // console.log(senderId, receiverId, text);

    const user = socketOperations.getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  // Handling user disconnection
  socket.on("disconnect", () => {
    console.log("User Disconnected");
    socketOperations.removeUser(socket.id);
  });
});

// db connect
const port = process.env.PORT || 3001;
DbConnect()
  .then(() => {
    httpServer.listen(port, () => {
      console.log(`server runing on port ${port} and DB connected`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
