const {Category} = require('../database/models');

const transactionCreateCategory = async (req, res, next) => {
    const {new_category} = req.body;
    
    if(!new_category){ return next() }

    const searchCategoryname = await Category.findOne({where:{category_name:new_category}})
    
    if(searchCategoryname){
        req.body.category_id = searchCategoryname.id
        delete req.body.new_category
        return next()
    }

    const newCategory = {
        category_name : new_category,
        user_id : req.tokenDecoded.id
    }
    
    const createCategory = await Category.create(newCategory)
    req.body.category_id = createCategory.id
    delete req.body.new_category

    return next();
}

module.exports = transactionCreateCategory;