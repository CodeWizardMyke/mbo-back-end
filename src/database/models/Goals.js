module.exports = (sequelize, DataTypes) => {
    const Goals =  sequelize.define('Goals',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
            allowNull:false,
          },
          user_id:{
            type:DataTypes.INTEGER,
            references:{
              model:{
                tableName:'users',
              },
              key:'id'
            },
            allowNull:false
          },
          goals_amount:DataTypes.DECIMAL,
          goals_name:DataTypes.STRING,
    },
    {
        timestamps:true,
        tableName:'goals'
    })

    Goals.associate = (models) => {
      Goals.belongsTo(models.Users, {foreignKey:'user_id', as:'user'})
    }

    return Goals;
}