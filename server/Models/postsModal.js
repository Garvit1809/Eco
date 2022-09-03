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
    desc: {
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
    }
  },
  { timestamps: true }
);

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
