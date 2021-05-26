const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Member extends Model {}

Member.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    github: {
        type: DataTypes.STRING,
    },
    find_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'member',
  }
);

module.exports = Member;
