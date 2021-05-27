const router = require('express').Router();
const { Project, User, Skill } = require('../models');

// Render Homepage
router.get('/', async (req, res) => {
  try {
    // RENDERS HANDLEBAR VIEWS
    const userData = await User.findAll({
      // include: [
      //   {
      //     model: Skill,
      //     attributes: ['name'],
      //   },
      //   {
      //     model: Project,
      //     attributes: ['name'],
      //   },
      // ],
    });

    console.log(userData);
    const users = userData.map((user) =>
      user.get({ plain: true })
    );

    //call views/user.handlebars
    res.render('users', {
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;