const { Pool } = require('pg');
const dbConfig = require('./config');

const pool = new Pool({
  connectionString: dbConfig.development.url,
});

const query = async (text, params) => {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
    client.release();
  }
};

module.exports = query;