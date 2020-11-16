var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/petshop', function(req,res){
  res.render('petshop', {title:'petshop'})
})

router.get('/pethair', function(req,res){
  res.render('pethair', {title:'pethair'})
})

router.get('/pethospital', function(req,res){
  res.render('pethospital', {title:'pethospital'})
})

router.get('/petthing', function(req,res){
  res.render('petthing', {title:'petthing'})
})

router.get('/pethotel', function(req,res){
  res.render('pethotel', {title:'pethotel'})
})




module.exports = router;
