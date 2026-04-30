const express = require("express");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog
} = require("../controllers/blogController");

const router = express.Router();

router.post("/create", auth, upload.single("image"), createBlog);
router.get("/", getBlogs);
router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);

module.exports = router;
