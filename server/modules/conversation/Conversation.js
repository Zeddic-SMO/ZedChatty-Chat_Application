const ConversationRoutes = require("express").Router();
const Conversation = require("../models/ConversationSchema");

// New conversation
ConversationRoutes.post("/", async (req, res) => {
  try {
    const { SenderId, ReceiverId } = req.body;
    if (!SenderId || !ReceiverId)
      throw new Error("Sender's and Receiver's ID are required");

    const newConversation = new Conversation({
      members: [SenderId, ReceiverId],
    });
    const savedConversation = await newConversation.save();

    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Get conversation
ConversationRoutes.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const conversation = await Conversation.find({
      members: { $in: [userId] },
    });

    if (!conversation) throw new Error("No conversation found");

    res.status(200).send(conversation);
  } catch (err) {
    res.status(402).json(err.message);
  }
});

module.exports = ConversationRoutes;
