'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users_courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:{
            tableName:'Users'
          },
          key:"id"
        }
      },
      course_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:{
            tableName:'Courses'
          },
          key:"id"
        }
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users_courses');
  }
};