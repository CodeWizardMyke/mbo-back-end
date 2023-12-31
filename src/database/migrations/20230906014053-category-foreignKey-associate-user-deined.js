'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('category','user_id', {
      type:Sequelize.INTEGER,
      references:{
        model:'users'
      },
      key:'id'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('category','user_id', {type:Sequelize.INTEGER})
  }
};