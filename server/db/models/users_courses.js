'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users_courses.init({
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_courses',
    timestamps:false
  });
  return users_courses;
};