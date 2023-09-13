const bcrypt = require('bcrypt');
const {Users} = require('../database/models');

const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
const path = require('path')
const ambient = require(path.resolve(".ambient.js"))

const authentication = {
    login: async (req, res) =>{
        try {
            const {errors} = validationResult(req);
            if(errors.length){
                return res.status(400).json(errors)
            }
            const userByEmail = await Users.findOne({where:{email:req.body.email}});

            const pwMatch = await bcrypt.compare( String(req.body.password) , userByEmail.password)

            if(!pwMatch){return res.status(400).json({errors:{password:'Senha ou usuário inválido!'}})}

            const token = jwt.sign({id:userByEmail.id}, ambient.SECRET, ) //{expiresIn:'10'})
            delete userByEmail.password

            return res.json({token, user:userByEmail})
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    }
}

module.exports = authentication;