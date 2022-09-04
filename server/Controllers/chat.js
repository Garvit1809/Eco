const asyncHandler = require("express-async-handler");
const Chat = require("../Models/chatModel");

const getAllChats = asyncHandler(async (req, res) => {
  try {
    const chats = Chat.find();
    res.status(200).send(chats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const getChatById = asyncHandler(async (req, res) => {
  try {
    const chat = Chat.find({ _id: req.chatId });
    res.status(200).send(chat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const createChat = asyncHandler(async (req, res) => {
  const currUser = req.user;
  try {
    // Create campaign chat
    const campaignChat = await Chat.create({
      chatName: req.body.name,
      users: [currUser],
      isGroupChat: true,
      groupAdmin: currUser,
    });

    // Return created campaign chat
    const fullCampaignChat = await Chat.findOne({ _id: campaignChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    res.status(200).json(fullCampaignChat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const addChatUser = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;
  const added = Chat.findByIdAndUpdate(
    chatId,
    {
      $push: {
        users: userId,
      },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    res.status(404);
    throw new Error("Chat not found");
  } else {
    res.json(added);
  }
});

const removeChatUser = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;
  const removed = Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: {
        users: userId,
      },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    res.status(404);
    throw new Error("Chat not found");
  } else {
    res.json(removed);
  }
});

const fetchChats = asyncHandler(async (req, res) => {
  try {
    Chat.find({
      users: {
        $elemMatch: {
          $eq: req.user._id,
        },
      },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name profilePicture email",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = {
  getAllChats,
  getChatById,
  createChat,
  addChatUser,
  removeChatUser,
};
