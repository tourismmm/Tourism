const bcrypt = require('bcrypt');
const User = require('../Models/userModel.js');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secretKey = '\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvBj3GR/M70g+5SXrfnfn\npdFvdZYeq1LEtWxYC2nZU/1egf15W6gahdZzVaL716MywlpEN5a0T5Aq94cg9NhJ\n14Qi+f7vmOMsZzrPv1TNVVsXyzo2MT8IsfC6xAJFzujwvlHFalOZ25ezol8wlu5U\nZiUfuhFQWY2Pxy4/yZE4DDtqpcSJZiCoJlIn783NWhLcx+m+mBMFyL57FCLJ3Nhr\nYw5Me4h8gW215m9CFD1AWbpw9WJVkRtxZuf19b/r9e6HCrk9NY0BSuGpkXrVTt3B\n2JluF1IXQEtcblU+hj6ubFzca8aAJekZcsYV3qCU1Vvv+heX5Bh3VPXxzUP6mYvA\nXQIDAQAB\n'; 
const createUser = async (req, res) => {
    const { firstname, lastname, username, email, password, confirmpassword } = req.body;

    try {
   
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const hashedConfirmPassword = await bcrypt.hash(confirmpassword, saltRounds);

        
        await User.create(firstname, lastname, username, email, hashedPassword, hashedConfirmPassword);
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

    
        const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
            expiresIn: '1h' 
        });

        res.status(200).json({ success: true, message: 'Successfully signed in', user, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    createUser,
    signIn
};
