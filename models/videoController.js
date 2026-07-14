const Video = require("../models/Video");

// Add Video
exports.addVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);

    res.status(201).json(video);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All Videos
exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();

    res.json(videos);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Single Video
exports.getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    res.json(video);
  } catch (err) {
    res.status(500).json(err);
  }
};
