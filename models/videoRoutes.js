const express = require("express");

const router = express.Router();

const {
  addVideo,
  getVideos,
  getVideo,
} = require("../controllers/videoController");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, addVideo);

router.get("/", getVideos);

router.get("/:id", getVideo);

module.exports = router;
