const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fruitSchema = new Schema({
  name: String,
  color: String
})

module.exports = mongoose.model('Fruit', fruitSchema)