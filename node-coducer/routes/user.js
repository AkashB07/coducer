const express = require('express');

const authenticatemiddleware = require('../middleware/auth');

const userController = require('../controller/user')

const router = express.Router();

//For signup
router.post('/signup', userController.signup);

//For login
router.post('/login', userController.login);

//For fetching all user data
router.get('/data', authenticatemiddleware.authenticate, userController.data)

module.exports = router;