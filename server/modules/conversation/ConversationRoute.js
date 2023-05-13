const ConversationRoutes = require("express").Router();
const Conversation = require("./ConversationSchema");

// New conversation
ConversationRoutes.post("/conversation", async (req, res) => {
  try {
    // valid req.body fields
    const { SenderId, ReceiverId } = req.body;
    if (!SenderId || !ReceiverId)
      throw new Error("Sender's and Receiver's ID are required");

    let newConversation = await Conversation.create({
      members: [SenderId, ReceiverId],
    });

    // const savedConversation = await newConversation.save();

    res.status(200).json({ status: "ok", message: "Success" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Get conversation
ConversationRoutes.get("/conversation/:userId", async (req, res) => {
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
