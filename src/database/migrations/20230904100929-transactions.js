'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('transactions',{
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
      amount:Sequelize.DECIMAL,
      category_id:{
        type:Sequelize.INTEGER,
        references:{
          model:{
            tableName:'category',
          },
          key:'id'
        },
        allowNull:false
      },
      type:Sequelize.STRING,
      installments:Sequelize.INTEGER,
      date:Sequelize.DATE,
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('transactions');
  }
};
