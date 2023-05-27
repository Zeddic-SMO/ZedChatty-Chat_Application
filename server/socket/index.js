let users = [];

exports.addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
  // console.log(users);
  return users;
};

exports.removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

exports.getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};
