const router = require('express').Router();
const { Stat } = require('../../models');
// const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newStat = await Stat.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newStat);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const StatData = await Stat.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!StatData) {
      res.status(404).json({ message: 'No Stat found with this id!' });
      return;
    }

    res.status(200).json(StatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
