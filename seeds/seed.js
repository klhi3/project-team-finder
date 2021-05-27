const sequelize = require('../config/connection');
const { User, Project, Skill } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const skillData = require('./skillData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const projects = await Project.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  });

  const skills = await Skill.bulkCreate(skillData, {
    individualHooks: true,
    returning: true,
  });

  // const skills = await Skill.bulkCreate(skillData);


  process.exit(0);
};

seedDatabase();
