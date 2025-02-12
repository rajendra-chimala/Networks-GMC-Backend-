const express = require('express');
const verifyToken = require('../Middlewares/authUSer');


const router = express.Router();

router.post('/follow/:id',verifyToken, follow );
router.delete  ('/unfollow/:id',verifyToken,unfllow);





module.exports = router;