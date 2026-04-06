const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "dbdkgzb2g",
  api_key: "536337567332678",
  api_secret: "M9tdebguiG0phQaqVJbKDAZSOZo",
});

// Fixed typo: storage instead of stroage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "4pm",
    allowed_formats: ["jpg", "jpeg", "png", "pdf", "webp"],
  },
});

// Fixed typo: storage instead of stroage
const upload = multer({ storage }); 

module.exports = upload;
