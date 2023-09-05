module.exports = (sequelize, DataTypes) => {
    const Support_tickets =  sequelize.define('Support_tickets',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
            allowNull:false,
          },
          user_id:DataTypes.INTEGER,
          subject:DataTypes.STRING,
          message:DataTypes.STRING,
          status:DataTypes.STRING,
    },
    {
        timestamps:true,
        tableName:'support_tickets'
    })

    Support_tickets.associate = (models) => {
        Support_tickets.belongsTo(models.Users, {
            foreignKey: 'user_id',
            as: 'user',
        });
    }

    return Support_tickets;
}