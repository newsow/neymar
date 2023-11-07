'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events_tags', {
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
    await queryInterface.dropTable('events_tags');
  }
};