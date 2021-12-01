'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Artist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Name cannot be empty/null" } }
    },
    albums: {
      type: DataTypes.INTEGER,
      validate: { isInt: true }
    },
    songs: {
      type: DataTypes.INTEGER,
      validate: { isInt: true }
    }
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};