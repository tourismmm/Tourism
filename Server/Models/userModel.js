const query = require('../db.js');
const bcrypt = require('bcrypt');
const User = {};

User.create = async (firstname, lastname, username, email, password, confirmpassword) => {
    try {
        const result = await query('INSERT INTO users(firstname, lastname, username, email, password, confirmpassword) VALUES($1, $2, $3, $4, $5, $6)', [firstname, lastname, username, email, password, confirmpassword]);
        return result.rows;
    } catch (err) {
        throw err;
    }
};

User.findByEmailAndPassword = async (email, password) => {
    try {
        const result = await query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                return user;
            }
        }
        return null; 
    } catch (err) {
        throw err;
    }
};

module.exports = User;
