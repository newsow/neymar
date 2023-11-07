'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:{
            tableName:'Teachers'
          },
          key:"id"
        }
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};