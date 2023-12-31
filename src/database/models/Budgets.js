module.exports = (sequelize, DataTypes) => {
    const Budgets =  sequelize.define('Budgets',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
            allowNull:false,
          },
          user_id:DataTypes.INTEGER,
          category_id:DataTypes.INTEGER,
          budget_amount:DataTypes.DECIMAL,
    },
    {
        timestamps:true,
        tableName:'budgets'
    })

    Budgets.associate = (models) => {
        Budgets.belongsTo(models.Users, {foreignKey:'user_id', as:'user'});
        Budgets.belongsTo(models.Category, {foreignKey:'category_id', as:'category'});
    };

    return Budgets;
}