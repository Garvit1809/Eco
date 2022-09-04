const express = require("express");
const router = express.Router();
const {
  getAllChats,
  getChatById,
  getChatUsers,
  getChatMessages,
  createChat,
  addChatUser,
  removeChatUser,
} = require("../Controllers/chat");

router.get("/", getAllChats);
router.get("/:id", getChatById);
router.get("/:id/users", getChatUsers);
router.get("/:id/messages", getChatMessages);
router.post("/create", createChat);
router.put("/add-user", addChatUser);
router.put("/remove-user", removeChatUser);

module.exports = router;
