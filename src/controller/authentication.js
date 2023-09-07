const bcrypt = require('bcrypt');
const {Users} = require('../database/models');

const {validationResult} = require('express-validator')

const authentication = {
    login: async (req, res) =>{
        try {
            const {errors} = validationResult(req);
            if(errors.length){
                return res.status(400).json(errors)
            }
            const userByEmail = await Users.findOne({where:{email:req.body.email}});

            const pwMatch = await bcrypt.compare( String(req.body.password) , userByEmail.password)

            if(!pwMatch){return res.status(400).json({errors:{passowrd:'Senha ou usuário inválido!'}})}

            return res.json('sucessful!')
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    }
}

module.exports = authentication;