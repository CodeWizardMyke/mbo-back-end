module.exports = (sequelize, DataTypes) => {
    const Category =  sequelize.define('Category',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
          },
          category_name:DataTypes.STRING,
          user_id:DataTypes.INTEGER,
    },
    {
        timestamps:false,
        tableName:"category"
    })

    Category.associate = (models) => {
        Category.belongsTo(models.Users, {foreignKey:'user_id', as:'user' });
    };

    return Category;
}