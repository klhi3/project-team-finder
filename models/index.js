// Contains sequelize models for database
const User = require('./User');
const Project = require('./Project');
const Skill = require('./Skill');

User.hasMany(Skill, {
  foreignKey: 'user_id',
});

Skill.belongsTo(User, {
  foreignKey: 'user_id',
});

Project.hasMany(Skill, {
  foreignKey: 'project_id',
});

Skill.belongsTo(Project, {
  foreignKey: 'project_id',
});


User.belongsToMany(Project, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Skill,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'user_projects'
});

Project.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Skill,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'project_team'
});



module.exports = { User, Project, Skill };