const Comment = require('../model/Comment');


const commentAdd = async (req,res)=>{
    const {postID,content}= req.body;
    const userID = req.userID;
    try {

        const newComment = await Comment({
            postID,userID,content
        })

        newComment.save();

        res.status(200).json({message:"Commented !",success:true});
    } catch (error) {

        res.status(400).json({message:"Failed to comment !",success:false,error})
        
    }



}


const deleteComment = async (req,res)=>{
    const ID = req.params.id

    try {

        const comment = await Comment.findById(ID);

        if(!comment){
            return res.status(404).json({message:"Comment not found !",success:false});
        }

        await Comment.findByIdAndDelete(ID);

        return res.status(200).json({message:"Comment Deleted !",success:true,comment});

        
    } catch (error) {
        
    }



}


const editComment =async (req,res)=>{
    const id = req.params.id ;
    const {content} = req.body;

    try {
        const comment = await Comment.findById(id);

        if(!comment) return res.status(200).json({message:"Comment not found !",success:false});

        const newcomment = await Comment.findByIdAndUpdate(id,{content},{new:true});

        res.status(200).json({message:"Comment updated !",success:true,newcomment});
        

    } catch (error) {

        res.status(400).json({message:"Failed update !",success:false,error});
        
    }
}


const getCommentByPostId = async (req,res)=>{
    const postID = req.params.id;

    try {
        const comments = await Comment.find({postID});
        res.status(200).json(comments);

        
    } catch (error) {
        res.status(400).json({message:"Getting error !",error});
        
    }
}

const getCommentById = async (req,res)=>{
    const ID = req.params.id;
    try {
        
        const comment = await Comment.findById(ID);

        if(!comment) return res.status(404).json({message:"Comment not Found !",success:true});

        res.status(200).json(comment);
    } catch (error) {
        return res.json({message:"Failed to get comment !",success:false,error});
        
    }
}

module.exports = {commentAdd,deleteComment,getCommentById,getCommentByPostId,editComment}