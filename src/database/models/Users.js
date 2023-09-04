
module.exports = (sequelize, DataTypes) => {
    const Users =  sequelize.define('Users',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
          },
          fullname:DataTypes.STRING,
          email:DataTypes.STRING,
          password:DataTypes.STRING,
    })

    return Users;
}