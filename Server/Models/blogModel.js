const query  = require('../db.js');

const Blog = {};




Blog.allblogs = async () => {
  try {
    const result = await query('SELECT blog.id , blog.title, blog.image FROM blog  ORDER BY created_at DESC;');
    return result.rows;
  } catch (err) {
    throw err;
  }
};


Blog.blogdetail = async (blogId) => {
  try {
    const result = await query('SELECT blog.id, blog.title, blog.detail, blog.image FROM blog  where blog.id = $1;', [blogId]);
    return result.rows;
  } catch (err) {
    throw err;
  }
};

Blog.create = async (title, detail, image, created_at) => {
  
 // const userIdResult = await query('SELECT id FROM users WHERE id = $1', [user_id]);
  
  // if (userIdResult.rows.length === 0) {
  //   throw new Error('User not found');
  // }


  const result = await query('INSERT INTO blog (title, detail, image, created_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)', [title, detail, image]);
  return result.rows;
};





module.exports = Blog;