'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('category','user_id', Sequelize.INTEGER)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('category','user_id', Sequelize.INTEGER)

  }
};
