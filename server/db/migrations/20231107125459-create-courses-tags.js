'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      tag_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:{
            tableName:'Tags'
          },
          key:"id"
        }
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses_tags');
  }
};