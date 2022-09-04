const asyncHandler = require("express-async-handler");
const Message = require("../Models/messageModel");

const getMessageById = asyncHandler(async (req, res) => {
  try {
    const message = Message.find({ _id: req.messageId })
    res.status(200).send(message);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const addMessage = asyncHandler(async (req, res) => {
  const { chatId, messageId } = req.body;
  const added = Chat.findByIdAndUpdate(
    chatId,
    {
      $push: {
        messages: messageId,
      },
    },
    {
      new: true,
    }
  )

  if (!added) {
    res.status(404);
    throw new Error("Message not found");
  } else {
    res.json(added);
  }
});

const removeMessage = asyncHandler(async (req, res) => {
  const { chatId, messageId } = req.body;
  const removed = Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: {
        messages: messageId,
      },
    },
    {
      new: true,
    }
  );

  if (!removed) {
    res.status(404);
    throw new Error("Message not found");
  } else {
    res.json(removed);
  }
});

module.exports = {
  getMessageById,
  addMessage,
  removeMessage,
};
