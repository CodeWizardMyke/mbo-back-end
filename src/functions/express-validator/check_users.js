const { check } = require('express-validator');
/* User database */
const {Users} = require('../../database/models');

const check_users = {
    post:[
        check('email')
            .notEmpty().withMessage('Preencha o campo').trim().bail()
            .isEmail().withMessage('Insira um email válido').bail()
            .custom( async (value, {req}) => {
                const response = await Users.findOne({where:{email:req.body.email}})
                if(response){
                    throw new Error('Email já cadastrado, insira um email diferente!')
                }
                return true
           } ),

        check('password')
            .notEmpty().withMessage('Preencha o campo').trim().bail()
            .isLength({min:10}).withMessage('Esperado ao menos 10 caracteres'),

        check('fullname')
            .notEmpty().withMessage('Preencha o campo').trim()
    ],
    put:[
       check('email').optional().custom( async (value, {req}) => {
            if(req.body.email){
                const response = await Users.findOne({where:{email:req.body.email}})
                if(response){
                    throw new Error('Email já cadastrado, insira um email diferente!')
                }
            }
            return true
       }),

       check('password').optional().bail()
       .notEmpty().withMessage('Preencha o campo').trim().bail()
       .isLength({min:10}).withMessage('Esperado ao menos 10 caracteres'),

        check('fullname').optional().bail()
            .notEmpty().withMessage('Preencha o campo').trim()
    ]
};

module.exports = check_users;