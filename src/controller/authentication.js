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
            let user = await Users.findOne({where:{email:req.body.email}});

            const token = jwt.sign( {id:user.id} , 'SECRET');
            const data = { fullname:user.fullname, email:user.email}

            return res.json({token, user:data})
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    }
}

module.exports = authentication;