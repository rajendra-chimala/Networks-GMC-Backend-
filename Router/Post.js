const express = require('express');
const verifyToken = require('../Middlewares/authUSer');
const {createPost, deletePost, getAllPosts, editPost, getPostById} = require('../controller/Post');


const router = express.Router();

router.post('/create',verifyToken, createPost );
router.delete  ('/delete/:id',verifyToken,deletePost);
router.put('/edit/:id',verifyToken, editPost);
router.get('/posts',verifyToken, getAllPosts);
router.get('/post/:id',verifyToken, getPostById);




module.exports = router;