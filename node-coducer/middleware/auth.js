const jwt = require('jsonwebtoken');
const User = require('../models/users');


//User authentication
const authenticate = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const user = jwt.verify(token, 'securityKey522wsrhrrh5fa2fddrsh');
        User.findById(user.userId).then(user => {
            req.user = user;
            next();
        })
    } 
    catch (err) {
        return res.status(401).json({success: false})
    }
}

module.exports = {
    authenticate
}