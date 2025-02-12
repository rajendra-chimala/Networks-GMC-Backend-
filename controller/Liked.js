const Like = require('../model/Like');


const Liked = async (req, res) => {
    const { postID } = req.body;
    const userID = req.userID;
    // console.log(userID)
    try {
        let liked = await Like.findOne({ postID, userID });

        if(liked) {
            await Like.deleteOne({ postID, userID });
            return res.status(200).json({ message: 'Unliked post successfully' });
        }

        if (!liked) {
            liked = new Like({ postID, userID });
            await liked.save();
        }
        res.status(200).json({ message: 'Liked post successfully' });
        
    } catch (error) {
        res.status(500).json({ message: 'Failed to like post' });
    
    }
}


const unliked = async (req, res) => {
    const { postID } = req.body;
    const userID = req.userID;

    try {
        await Like.deleteOne({ postID, userID });
        res.status(200).json({ message: 'Unliked post successfully' });
        
    } catch (error) {
        res.status(500).json({ message: 'Failed to unlike post' });
    
    }
}

const getLikes = async (req, res) => {
    const  postID  = req.params.id;
    try {

        const likes = await Like.find({ postID  });
        const userIDs = likes.map(like => like.userID);
        res.status(200).json({message:"Likes :",userIDs  });
        
    } catch (error) {
        res.status(500).json({ message: 'Failed to get likes',error
         });
        
    }
}

module.exports = { Liked, getLikes };