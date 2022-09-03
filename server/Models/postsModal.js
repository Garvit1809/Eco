const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
      default: ""
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    members: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
