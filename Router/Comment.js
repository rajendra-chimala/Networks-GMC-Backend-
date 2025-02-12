const express = require('express');
const { commentAdd, deleteComment, editComment, getCommentById, getCommentByPostId } = require('../controller/Comment');
const verifyToken = require('../Middlewares/authUSer');


const router = express.Router();

router.post('/comment',verifyToken, commentAdd );
router.delete  ('/delete/:id',verifyToken,deleteComment);
router.put('/edit/:id',verifyToken, editComment);
router.get('/comments/:id', verifyToken,getCommentByPostId);
router.get('/comment/:id',verifyToken, getCommentById);




module.exports = router;