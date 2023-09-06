
module.exports = (sequelize, DataTypes) => {
    const Users =  sequelize.define('Users',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false,
            unique:true
          },
          fullname:DataTypes.STRING,
          email:DataTypes.STRING,
          password:DataTypes.STRING,
    },
    {
        tableName:'users',
        timestamps:true
    });

    Users.associate = (models) => {
        Users.hasMany(models.Support_tickets, { foreignKey: 'user_id',as: 'support_tickets',});
        Users.hasMany(models.Transactions, {foreignKey:'user_id', as :'transactions'});
        Users.hasMany(models.Settings, {foreignKey:'user_id', as :'settings'});
        Users.hasMany(models.Linked_accounts, {foreignKey:'user_id', as :'linked_accounts'});
        Users.hasMany(models.Goals, {foreignKey:'user_id', as :'goals'});
        Users.hasMany(models.Budgets, {foreignKey:'user_id', as :'budgets'});
        Users.hasMany(models.Category, {foreignKey:'user_id', as :'category'});
    };

    return Users;
}