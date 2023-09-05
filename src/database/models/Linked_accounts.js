module.exports = (sequelize, DataTypes) => {
    const Linked_accounts =  sequelize.define('Linked_accounts',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
            allowNull:false,
          },
          user_id:DataTypes.INTEGER,
          account_name:DataTypes.STRING,
          account_number:DataTypes.STRING,
          bank_name:DataTypes.STRING,
    },
    {
        timestamps:true,
        tableName:'linked_accounts'
    })

    return Linked_accounts;
}