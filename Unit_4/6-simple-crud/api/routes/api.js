const express = require('express')
const router = express.Router();
const postController = require('../controllers/posts')


router.get('/posts/', postController.index)
// router.get('/posts/:id', postController.index)



module.exports = router
