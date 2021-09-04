const router = require('express').Router();
const gamepageRoutes = require('./gamepage-routes');
const homepageRoutes = require('./homepage-routes');
const leaderboardsRoutes = require('./leaderboards-routes');
const profilepageRoutes = require('./profilepage-routes');

router.use('/gamepageR', gamepageRoutes);
router.use('/homepageR', homepageRoutes);
router.use('/leaderboardsR', leaderboardsRoutes );
router.use('/profilepageR', profilepageRoutes);

module.exports = router;
