'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Song.init({
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Title cannot be empty/null" } }
    },
    artist: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Artist cannot be empty/null" } }
    },
    album: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: { msg: "Album cannot be empty/null" } }
    },
    plays: {
      type: DataTypes.INTEGER,
      validate: { isInt: true }
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};