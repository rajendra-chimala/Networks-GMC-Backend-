const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    userID: { type: mongoose.Schema.Types.ObjectId },
    content: { type: String, required: true },
    mediaUrl:{type:String,},
    createdAt: { type: Date, default: Date.now }


});

module.exports = mongoose.model('Post',postSchema);