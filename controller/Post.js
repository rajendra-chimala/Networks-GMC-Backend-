const Post = require('../model/Post');

const createPost = async (req, res) => {
    const { content, mediaUrl } = req.body;
    const  user  = req.userID;

      

    try {
        const newPost = new Post({
             userID: user,
             content,
             mediaUrl
            
            });
        const savedPost = await newPost.save();
        res.status(201).json({message:"Post Created Successfully !",success:true,savedPost});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const deletePost = async (req, res) => {

const id = req.params.id;

try {
    const user = await Post.findById(id);
    
    if(!user) return res.status(404).json({ message: "User not found!" });
    const post = await Post.findByIdAndDelete(id);
    
    if(!post) return res.status(404).json({ message: "Post not found!" });
    
    res.json({ message: "Post deleted successfully!", success: true, post });
    
} catch (error) {
    res.status(500).json({ message: error.message });
    
}

}

const getAllPosts = async (req, res) => {


    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json({ success: true, posts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const editPost = async (req, res) => {
    const id = req.params.id;
    const { content, mediaUrl } = req.body;

    try {
        const post = await Post.findByIdAndUpdate(id, { content, mediaUrl }, { new: true });
        
        if(!post) return res.status(404).json({ message: "Post not found!" });
        
        res.json({ message: "Post updated successfully!", success: true, post });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
 
}


const getPostById = async (req, res) => {
    const id = req.params.id;
    try {

        const post = await Post.findById(id);
        
        if(!post) return res.status(404).json({ message: "Post not found!" });
        
        res.json({ success: true, post });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}

module.exports = {createPost,deletePost,getAllPosts,editPost,getPostById};