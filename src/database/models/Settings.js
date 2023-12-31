module.exports = (sequelize, DataTypes) => {
    const Settings =  sequelize.define('Settings',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
            allowNull:false,
          },
          user_id:DataTypes.INTEGER,
          notification_preference:DataTypes.INTEGER,
          privacy_settings:DataTypes.INTEGER,
    },
    {
        timestamps:true,
        tableName:'settings'
    })

    Settings.associate = (models) => {
        Settings.belongsTo(models.Users, {foreignKey:'user_id', as:'user' })
    }    

    return Settings;
}