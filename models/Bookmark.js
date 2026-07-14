const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },

    title: {
      type: String,
      default: "",
    },

    timestamp: {
      type: Number,
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Bookmark", bookmarkSchema);
