const express = require('express');
const { Liked, getLikes } = require('../controller/Liked');
const verifyToken = require('../Middlewares/authUSer');


const router = express.Router();

router.post('/like/',verifyToken, Liked );
router.get('/likes/:id',verifyToken, getLikes);
  





module.exports = router;