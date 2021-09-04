const router = require('express').Router();
const {
 //retreive home-page content
} = require('../models');


  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/'); //should redirec to the signing page
      return;
    }
  
    res.render('login');
  });

module.exports = router;