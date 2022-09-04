const express = require("express");
const router = express.Router();
const { 
    getAllChats, 
    getChatById, 
    createChat, 
    addChatUser, 
    removeChatUser
} = require("../Controllers/chat");

router.get("/", getAllChats);
router.get("/:id", getChatById)
router.post("/create", createChat);
router.put("/add-user", addChatUser);
router.put("/remove-user", removeChatUser);

module.exports = router;
