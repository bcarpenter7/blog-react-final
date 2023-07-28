const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Post = require('./models/post.js')
const cors = require('cors')
require('dotenv').config()

app.use(express.json()); //use .json(), not .urlencoded()
app.use(cors())

app.post('/post', (req, res)=>{
    Post.create(req.body)
    .then((createdPost)=>{
        res.json(createdPost)
    })
});

app.get('/post', (req, res)=>{
    Post.find({})
    .then((foundPost) => {
        res.json(foundPost)
    })
});

/// FIX THIS LATER DELETE PERSON
// app.delete('/post/:id', (req, res)=>{
//     Post.findByIdAndRemove(req.params.id)
//     .then((deletedPost)=> {
//         res.json(deletedPost)
//     })
// });

// app.put('/post/:id', (req, res)=>{
//     Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     .then((updatedPost)=>res.json(updatedPost))
// });

app.listen(3000, ()=>{
    console.log('listening...');
});

mongoose.connect(process.env.DB_URL)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});