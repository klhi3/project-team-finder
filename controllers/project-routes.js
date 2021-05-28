const router = require('express').Router();
const { Project, User, Skill } = require('../models');

// Render Homepage
router.get('/', async (req, res) => {
  try {
      // RENDERS HANDLEBAR VIEWS
      const projectData = await Project.findAll({
        include: [
          {
            model: Skill,
            attributes: ['name'],
          },
          {
            model: User,
            through: Skill,
            as: "project_team"
          },
        ],
      });
  
  
      const projects = projectData.map((p) => 
          p.get({ plain: true })       
      );
  
      res.render('projects', {
        projects,
      });
   } catch (err) {
      console.log(err);
      res.status(500).json(err);
   }
});

module.exports = router;