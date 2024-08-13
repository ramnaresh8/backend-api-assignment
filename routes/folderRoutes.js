const express = require("express");
const { createFolder, getFolders } = require("../controllers/folderController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createFolder);
router.get("/", protect, getFolders);

module.exports = router;
