const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Match extends Model {}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id',
      },
    },
    member_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'member',
        key: 'id',
      },
    },
 },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'match',
  }
);

module.exports = Match;
