const blogController = require('../Controllers/blogController');
const express = require('express');
const router = express.Router();

router.get('/', blogController.allblogs);
router.get('/blog/:id', blogController.blogdetail);
router.post('/blog/addblog', blogController.createBlog);

module.exports = router;