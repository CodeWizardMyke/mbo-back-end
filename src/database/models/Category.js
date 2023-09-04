module.exports = (sequelize, DataTypes) => {
    const Category =  sequelize.define('Category',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
          },
          category_name:DataTypes.STRING,
    },
    {
        timestamps:false,
        tableName:"category"
    })

    return Category;
}