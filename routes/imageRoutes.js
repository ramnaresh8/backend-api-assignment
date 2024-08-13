const express = require("express");
const { uploadImage, searchImages } = require("../controllers/imageController");
const { protect } = require("../middleware/authMiddleware");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", protect, upload.single("image"), uploadImage);
router.get("/search", protect, searchImages);

module.exports = router;
