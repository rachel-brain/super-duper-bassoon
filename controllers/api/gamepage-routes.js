const { User } = require('../../models');
const { route } = require('./homepage-routes');
const router = require('express').Router();

router.put('/updatehighscore', async (req, res) => {
    try {
        const userDataHigh = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });
        if (userDataHigh.highscore < req.body.highscore) {
            const userData = await User.update(
                { highscore: req.body.highscore },
                { where: { id: req.session.user_id } }
            )
        }else {
            return res.status(200)
        }
        return res.status(200)

    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;

