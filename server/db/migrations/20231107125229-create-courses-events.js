'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses_events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:{
            tableName:'Events'
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
    await queryInterface.dropTable('courses_events');
  }
};