'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Courses.belongsToMany(models.Users,{through:models.users_courses,foreignKey:'course_id'})
      Courses.belongsTo(models.Teachers)
      Courses.belongsToMany(models.Events,{through:models.courses_events,foreignKey:'course_id'})
      Courses.belongsToMany(models.Tags,{through:models.courses_tags,foreignKey:'course_id'})
    }
  }
  Courses.init({
    title: DataTypes.STRING,
    teacher_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Courses',
    timestamps:false
  });
  return Courses;
};