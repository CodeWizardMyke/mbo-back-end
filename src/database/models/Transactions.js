module.exports = (sequelize, DataTypes) => {
    const Transactions = sequelize.define('Transactions', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
            allowNull:false,
          },
          user_id:DataTypes.INTEGER,
          amount:DataTypes.DECIMAL,
          category_id:DataTypes.INTEGER,
          type:DataTypes.STRING,
          installments:DataTypes.INTEGER,
          date:DataTypes.DATE,
    },
    {
        timestamps:true,
        tableName:'transactions'
    })

    return Transactions;
}