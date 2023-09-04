'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('goals',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
        allowNull:false,
      },
      user_id:{
        type:Sequelize.INTEGER,
        references:{
          model:{
            tableName:'users',
          },
          key:'id'
        },
        allowNull:false
      },
      goals_amount:Sequelize.DECIMAL,
      goals_name:Sequelize.STRING,
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('goals');
  }
};
