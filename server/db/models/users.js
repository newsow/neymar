'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(models.Courses,{through:models.users_courses,foreignKey:'user_id',onDelete:'CASCADE'})
      Users.belongsToMany(models.Tags,{through:models.users_tags,foreignKey:'user_id',onDelete:'CASCADE'})
    }
  }
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    superuser: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
    timestamps:false
  });
  return Users;
};