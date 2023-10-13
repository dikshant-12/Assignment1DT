var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'PortFolio' });
});

// About Me
router.get('/aboutme', function(req, res, next){
  res.render('AboutMe',{title: 'About Me'});
  });

//Project
router.get('/project',function (req,res ,next ){
  res.render('Project',{title: 'Projects'});
  });

  //ContactMe
  router.get('/contactme',function (req,res ,next ){
    res.render('ContactMe',{title: 'Contact Me'});
    })

  
module.exports = router;