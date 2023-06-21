var express = require('express');
var router = express.Router();

const fruitsCtrl = require('../controllers/fruits');

//GET ROUTES (use get functions from the controller)
router.get('/', fruitsCtrl.index);
router.get('/new', fruitsCtrl.new);
router.get('/edit/:id', fruitsCtrl.edit)
router.get('/:id', fruitsCtrl.show);
// //ACTION ROUTES (use action functions from the controller)
router.post('/', fruitsCtrl.create);
router.put('/:id', fruitsCtrl.update)
router.delete('/:id', fruitsCtrl.delete)


module.exports = router;