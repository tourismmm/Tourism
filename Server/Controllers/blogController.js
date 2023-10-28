const Blog = require('../Models/blogModel.js');

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

const createBlog = async (req, res) => {
  const { title, detail, user_id, image, created_at } = req.body;

  try {
  
    await Blog.create(title, detail, user_id, image, created_at);
    res.status(201).json({ success: true, message: 'Blog added successfully' });
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