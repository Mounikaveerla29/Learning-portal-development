const Bookmark = require("../models/Bookmark");

// Add Bookmark
exports.addBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.create({
      user: req.user.id,
      video: req.body.video,
      title: req.body.title,
      timestamp: req.body.timestamp,
    });

    res.status(201).json(bookmark);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Bookmarks of Video
exports.getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({
      video: req.params.videoId,
      user: req.user.id,
    }).sort({
      timestamp: 1,
    });

    res.json(bookmarks);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete Bookmark
exports.deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);

    res.json({
      message: "Bookmark Deleted",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
