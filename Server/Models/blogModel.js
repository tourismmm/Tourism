const query  = require('../db.js');

const Blog = {};

Blog.allblogs = async () => {
  try {
    const result = await query('SELECT blog.id ,users.username, blog.title, blog.image FROM users INNER JOIN blog ON users.id = blog.user_id ORDER BY created_at DESC;');
    return result.rows;
  } catch (err) {
    throw err;
  }
};


Blog.blogdetail = async (blogId) => {
  try {
    const result = await query('SELECT blog.id, users.username, blog.title, blog.detail, blog.image FROM users INNER JOIN blog ON users.id = blog.user_id where blog.id = $1;', [blogId]);
    return result.rows;
  } catch (err) {
    throw err;
  }
};

Blog.create = async (title, detail, user_id, image, created_at) => {
  try {

    const userIdResult = await query('SELECT id FROM users WHERE id = $1', [user_id]);
    
    if (userIdResult.rows.length === 0) {
 
      throw new Error('User not found');
    }
    

    const result = await query('INSERT INTO blog (title, detail, user_id, image, created_at) VALUES($1, $2, $3, $4, $5)', [title, detail, user_id, image, created_at]);
    
    return result.rows;
  } catch (err) {
    throw err;
  }
};






module.exports = Blog;