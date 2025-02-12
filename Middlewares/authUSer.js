const jwt = require('jsonwebtoken');

const User = require('../model/User');

const verifyToken = async (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        await User.findById(decoded.id)
       const id = decoded.id;
       req.userID = id;

        next();
    } catch (error) {   
        res.status(403).json({ message: 'Invalid token' });
    
    }
}


module.exports = verifyToken;