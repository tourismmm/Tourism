
const Blog = require('../Models/blogModel.js');
var multer  = require('multer');
const path = require('path');


const allblogs = async (req, res, next) => {

  try {
    const blogs = await Blog.allblogs();
    res.status(200).json({ success: true, blogs });
  } 
  
  catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Error in getting blogs' });
  }
};

const blogdetail = async (req, res, next) => {
  const blogId = req.params.id;
  try {
    const blog = await Blog.blogdetail(blogId);
    res.status(200).json({ success: true, blog });
  } 
  
  catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Error in getting blog' });
  }
};

const storage = multer.diskStorage({
  destination: '../client/src/assets/images', 
  filename: function (req, file, cb) {
    cb(null, 'image-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error('Please upload a valid image file'));
    }
    cb(null, true);
  }
}).single('image'); 

const createBlog = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ success: false, error: err.message });
      }

      const { title, detail, created_at } = req.body;
      const image = req.file ? req.file.filename : null;

      await Blog.create(title, detail, image, created_at);

      res.status(201).json({ success: true, message: 'Blog added successfully' });
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, error: 'Blog added failed' });
  }
};

module.exports = {
  allblogs,
  blogdetail,
  createBlog
};