const router = require('express').Router();
const { Project, User, Skill } = require('../models');

// Render Homepage
router.get('/', async (req, res) => {
  try {
    // RENDERS HANDLEBAR VIEWS
    const userData = await User.findAll({
      include: [
        {
          model: Skill,
          attributes: ['name'],
        },
        {
          model: Project,
          through: Skill,
          as: "user_projects"
        },
      ],
    });

    const users = userData.map((user) => {
      // console.log(user);
      // user.skills.map((skill) => console.log(skill.name));

      user.get({ plain: true })   
    }
    );

    
    console.log(users);
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