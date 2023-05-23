import { io } from "socket.io-client";

const socketClient = (userId) => {
  const socket = io("ws://localhost:3001");

  return socket.on("connect", () => {
    return socket.emit("addUser", userId);
  });
};

export default socketClient;
