const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true },
  followerID: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const Follow = mongoose.model("Follow", followerSchema);

module.exports = Follow;