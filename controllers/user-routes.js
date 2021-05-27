const router = require('express').Router();
const { Project, User } = require('../models');

// Render Homepage
router.get('/', async (req, res) => {
  try {
    // RENDERS HANDLEBAR VIEWS
    const useryData = await User.findAll({
      include: [
        {
          model: Skill,
          attributes: ['name'],
        },
      ],
    });

    const users = userData.map((user) =>
      user.get({ plain: true })
    );

    res.render('users', {
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;