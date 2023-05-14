const MessageRoute = require("express").Router();
const Message = require("./MessageSchema");

/**
 * @param
 */

MessageRoute.post("/message", async (req, res) => {
  try {
    const newMsg = await Message.create(req.body);
    res.status(200).json(newMsg);
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
});

// get conversation
MessageRoute.get("/message/:conversationId", async (req, res) => {
  try {
    const conversation = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
});
module.exports = MessageRoute;
