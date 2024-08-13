const Image = require("../models/Image");
const Folder = require("../models/Folder");
const path = require("path");

exports.uploadImage = async (req, res) => {
  const { name, folderId } = req.body;
  const imageUrl = path.join("uploads", req.file.filename);

  try {
    const folder = await Folder.findById(folderId);
    if (!folder || folder.user.toString() !== req.user._id.toString()) {
      return res.status(400).json({ message: "Invalid folder" });
    }

    const image = new Image({
      name,
      url: imageUrl,
      folder: folderId,
      user: req.user._id,
    });

    await image.save();
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchImages = async (req, res) => {
  const { query } = req.query;

  try {
    const images = await Image.find({
      user: req.user._id,
      name: { $regex: query, $options: "i" },
    });

    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
