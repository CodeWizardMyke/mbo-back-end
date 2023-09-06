
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
        Users.hasMany(models.Transactions, {foreignKey:'user_id', as :'transactions'})
    };

    return Users;
}