'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tags.belongsToMany(models.Users,{through:models.users_tags,foreignKey:'tag_id'})
      Tags.belongsToMany(models.Courses,{through:models.courses_tags,foreignKey:'tag_id'})
      Tags.belongsToMany(models.Events,{through:models.events_tags,foreignKey:'tag_id'})

    }
  }
  Tags.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tags',
    timestamps:false
  });
  return Tags;
};