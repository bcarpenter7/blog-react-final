const { default: mongoose } = require('mongoose');
const Fruit = require('../models/fruit');

module.exports = {
  show: showPage, 
  index: indexPage,
  new: newPage,
  edit: editPage,
  create: createFruit,
  update: updateFruit,
  delete: deleteFruit
}

//============================= GET FUNCTIONS=========================//
async function indexPage(req, res){
  try {
    const fruits = await Fruit.find({})
    res.render('fruits/index', {
      fruits
    })
  } catch {
    console.log('error')
  }
}

async function showPage(req, res,){
  try {
    const fruit = await Fruit.findById(req.params.id)
    res.render('fruits/show', {
      fruit
    })
  } catch {
    console.log('error')
  }
}

function newPage(req, res){
  res.render('fruits/new')
}

async function editPage(req, res){
  try {
    const fruit = await Fruit.findById(req.params.id)
    res.render('fruits/edit', {
      fruit
    })
  } catch {
    console.log('error')
  }
}

//============================= ACTIONS FUNCTIONS =========================//


async function createFruit(req, res){
  try {
    await Fruit.create(req.body)
    res.redirect('/fruits')
  } catch {
    console.log('error')
  }
}

async function updateFruit(req, res){
  try {
    await Fruit.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/fruits/' + req.params.id)
  } catch {
    console.log('error')
  }
}

async function deleteFruit(req, res){
  try{
    await Fruit.findByIdAndRemove(req.params.id)
    res.redirect('/fruits')
  } catch{
    console.log('error')
  }
}

