const { check } = require('express-validator');

const check_transaction =[
    check('amount')
        .notEmpty().withMessage('O campo valor não pode estar vazio').trim().bail(),
    check('type')
        .notEmpty().withMessage('Selecione um tipo de transação').trim().bail(),
    check('date')
        .notEmpty().withMessage('Data inválida').trim().bail(),
    check('category_id').custom( (value, {req}) => {
        const category_id = req.body.category_id;
        const new_category = req.body.new_category;
        if(!category_id && !new_category){
            throw new Error('Selecione uma categoria, ou adicione uma nova')
        }
        return true
    })
]


module.exports = check_transaction;