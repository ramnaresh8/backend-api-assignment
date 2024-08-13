const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  folder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Folder",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
