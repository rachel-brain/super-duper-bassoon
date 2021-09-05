const { User } = require('../../models');

const router = require('express').Router();

//login
router.post('/login', async (req, res) => {
  console.log('poo');  
  console.log('poo');
  res.send('poo');
  try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      console.log(userData);
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/:newUser', async (req, res) => {
  console.log('poo');  
  try {
        const userData = await User.create(req.body);

        // req.session.save(() => {
        //     req.session.user_id = userData.id;
        //     req.session.logged_In = true;
        //     res.status(200).json(userData);
        // });
        return res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/test', async (req,res) => {
  const userData = await User.findOne({where: {email: req.body.email}})
  return (userData);
})


module.exports = router;