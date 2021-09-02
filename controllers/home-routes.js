const router = require('express').Router();
const {
    Model1,
    Model2
} = require('../models');


// router.get('/', async (req, res) => {
//     try {
//       const dbGalleryData = await Gallery.findAll({
//         include: [
//           {
//             model: Painting,
//             attributes: ['filename', 'description'],
//           },
//         ],
//       });
  
//       const galleries = dbGalleryData.map((gallery) =>
//         gallery.get({ plain: true })
//       );
  
//       res.render('homepage', {
//         galleries,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/'); //should redirec to the signing page
      return;
    }
  
    res.render('login');
  });

module.exports = router;