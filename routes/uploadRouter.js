const express = require("express");
const router = express.Router();
const uploadController = require("../controller/uploadController");
const upload = require("../middleware/multer");

router.post("/upload", upload.single("image"), uploadController.uploadImage);

module.exports = router;
