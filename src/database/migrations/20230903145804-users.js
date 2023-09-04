'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('users',{
      id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
      },
      fullname:Sequelize.STRING,
      email:Sequelize.STRING,
      password:Sequelize.STRING,
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');
  }
};
