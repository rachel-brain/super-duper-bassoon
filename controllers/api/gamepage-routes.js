const { User } = require('../../models');
const { route } = require('./homepage-routes');
const router = require('express').Router();

router.put('/updatehighscore', async (req,res) => {
    try {
        const userData = await User.update(
            {highscore:req.body.highscore},
            {where: {id: req.session.user_id}}
        )
            return res.status(200).json(userData);
        
    } catch(err) {
        return res.status(500).json(err);
    }
})

module.exports = router;

// router.post('/newUser', async (req, res) => { 
//     try {
//           const userData = await User.create(req.body);
  
//           req.session.save(() => {
//               req.session.user_id = userData.id;
//               req.session.logged_In = true;
//               return res.status(200).json(userData);
//           });
//       } catch (err) {
//           res.status(400).json(err);
//       }
//   });

// const userData = await User.findByPk(req.session.user_id, {
//     attributes: { exclude: ['password'] },
// });