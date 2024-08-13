const Folder = require("../models/Folder");

exports.createFolder = async (req, res) => {
  const { name, parentId } = req.body;

  try {
    const folder = new Folder({
      name,
      parent: parentId || null,
      user: req.user._id,
    });

    await folder.save();
    res.status(201).json(folder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFolders = async (req, res) => {
  try {
    const folders = await Folder.find({ user: req.user._id }).populate(
      "parent"
    );
    res.json(folders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
