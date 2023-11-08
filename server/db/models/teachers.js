'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Teachers.hasMany(models.Courses,{foreignKey:'teacher_id',onDelete:'CASCADE'})
      Teachers.hasMany(models.Events,{foreignKey:'teacher_id',onDelete:'CASCADE'})
    }
  }
  Teachers.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teachers',
    timestamps:false
  });
  return Teachers;
};