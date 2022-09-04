const express = require("express");
const router = express.Router();
const {
  getMessageById,
  addMessage,
  removeMessage,
} = require("../Controllers/message");

router.get("/:id", getMessageById);
router.put("/add-message", addMessage);
router.put("/remove-message", removeMessage);

module.exports = router;
