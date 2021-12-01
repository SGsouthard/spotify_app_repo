'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Album.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Name cannot be empty/null" } }
    },
    tracks: {
      type: DataTypes.INTEGER,
      validate: { isInt: true }
    },
    release: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Release cannot be empty/null" } }
    }
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};