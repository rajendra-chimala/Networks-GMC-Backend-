const mongoose = require('mongoose');
require('dotenv').config();
const DB_URL = process.env.DB_URL;

const databaseConnection = async () => {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}


module.exports = databaseConnection;