const express = require('express');
const app = express();
const mongoose = require('mongoose')
const People = require('./models/people.js')
const cors = require('cors')
require('dotenv').config()

app.use(express.json()); //use .json(), not .urlencoded()
app.use(cors())

app.post('/people', (req, res)=>{
    People.create(req.body)
    .then((createdPerson)=>{
        res.json(createdPerson)
    })
});

app.get('/people', (req, res)=>{
    People.find({})
    .then((foundPeople) => {
        res.json(foundPeople)
    })
});

app.delete('/people/:id', (req, res)=>{
    People.findByIdAndRemove(req.params.id)
    .then((deletedPerson)=> {
        res.json(deletedPerson)
    })
});

app.put('/people/:id', (req, res)=>{
    People.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedPerson)=>res.json(updatedPerson))
});

app.listen(3000, ()=>{
    console.log('listening...');
});

mongoose.connect(process.env.DB_URL)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});