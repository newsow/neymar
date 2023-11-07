'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses_events.init({
    event_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'courses_events',
    timestamps:false
  });
  return courses_events;
};