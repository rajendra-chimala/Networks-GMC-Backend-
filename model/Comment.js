const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    postID:{type: mongoose.Schema.Types.ObjectId,required: true  },
    createdAt: { type: Date, default: Date.now }


});

module.exports = mongoose.model('Comment',commentSchema);