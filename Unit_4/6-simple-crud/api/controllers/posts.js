


const Post = require('../models/post')

module.exports = {
    index
}


async function index(req, res){
    try {
        const allPosts = await Post.find({})
        // Sending json data of allPosts
        res.status(200).json(allPosts)
    } catch(err){
        console.log(err)
    }
}