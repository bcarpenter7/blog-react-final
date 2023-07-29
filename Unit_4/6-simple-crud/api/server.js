const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Post = require('./models/post.js')
const cors = require('cors')
require('dotenv').config()


mongoose.connect(process.env.DB_URL)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});

app.use(express.json()); 
app.use(cors())

const apiRouter = require('../api/routes/api')

app.use('/api', apiRouter)


app.listen(3000, ()=>{
    console.log('listening...');
});

