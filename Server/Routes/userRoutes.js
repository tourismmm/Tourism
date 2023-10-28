const userController = require('../Controllers/userController');
const express = require('express');
const app = express();
const router = express.Router();

router.post('/signup', userController.createUser);
router.post('/signin', userController.signIn);


module.exports = router;
