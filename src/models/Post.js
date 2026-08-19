const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // will hold a URL/path once we add uploads in Phase 6
      default: "",
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Post", postSchema);
