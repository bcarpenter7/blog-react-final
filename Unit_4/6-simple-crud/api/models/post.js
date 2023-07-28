const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new mongoose.Schema({
    author: {type:String, required: true},
    title: {type:String, required: true},
    content: {type:String, required: true},
    img: {type:String}
},
{
    timestamps: true,
}
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post