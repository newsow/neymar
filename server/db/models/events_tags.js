'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  events_tags.init({
    event_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'events_tags',
    timestamps:false
  });
  return events_tags;
};