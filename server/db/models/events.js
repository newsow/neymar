'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Events.belongsTo(models.Teachers,{foreignKey:'teacher_id'})
      Events.belongsToMany(models.Courses,{through:models.courses_events,foreignKey:'event_id',onDelete:'CASCADE'})
      Events.belongsToMany(models.Tags,{through:models.events_tags,foreignKey:'event_id',onDelete:'CASCADE'})
    }
  }
  Events.init({
    title: DataTypes.STRING,
    teacher_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Events',
    timestamps:false
  });
  return Events;
};