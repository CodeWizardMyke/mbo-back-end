module.exports = (sequelize, DataTypes) => {
    const Settings =  sequelize.define('Settings',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
            allowNull:false,
          },
          notification_preference:DataTypes.INTEGER,
          privacy_settings:DataTypes.INTEGER,
    },
    {
        timestamps:true,
        tableName:'settings'
    })

    return Settings;
}