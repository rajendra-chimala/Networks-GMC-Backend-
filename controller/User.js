const bcrypt = require('bcryptjs');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async (req, res) => {
    const { name, email, password, bio, profile } = req.body;

    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists', success: false });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password:hashedPassword, bio, profile });
        res.status(201).json({message: 'User created successfully',success:true, user });
    } catch (error) {
        res.status(400).json({ message: error.message ,success: false  });
        console.log(error)
    }
}




const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found', success: false });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password', success: false });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        // res.cookie('token',token);
        res.json({ message: 'Logged in successfully', success: true, token });

    } catch (error) {
        return res.status(400).json({ message: error.message, success: false });
        console.log(error)

    }
        
}

const logout = (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully', success: true });
}

module.exports = { signup, login,logout };
