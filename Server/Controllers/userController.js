const bcrypt = require('bcrypt');
const User = require('../Models/userModel.js');
const saltRounds = 10;
const createUser = async (req, res) => {
    const { firstname, lastname, username, email, password, confirmpassword } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const hashedconfirmPassword = await bcrypt.hash(confirmpassword, saltRounds);

        
        await User.create(firstname, lastname, username, email, hashedPassword, hashedconfirmPassword);
        res.status(201).json({ success: true, message: 'User added successfully' });
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false, error: 'User registration failed' });
    }
};

const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findByEmailAndPassword(email, password);
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        res.status(200).json({ success: true, message: 'Successfully signed in', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    createUser,
    signIn
};
