'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      superuser: {
        type: Sequelize.BOOLEAN,
        default:false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};