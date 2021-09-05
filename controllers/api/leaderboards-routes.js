const { User } = require('../../models');

const router = require('express').Router();

//after a get request to /api/leaderboardsR/:users is processed
//a json object of all the users in the database is returned
router.get('/users', (req,res) => {
    User.findAll({
        attributes: ['id','name','email','password','highscore']
    })
    .then(dbUsers => res.json(dbUsers))
    .then(res.status(200))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});
module.exports = router;