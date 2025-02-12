const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({

    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    postID: { type: mongoose.Schema.Types.ObjectId, required: true },
    likedAt: { type: Date, default: Date.now }


});

module.exports = mongoose.model('Like',likeSchema);