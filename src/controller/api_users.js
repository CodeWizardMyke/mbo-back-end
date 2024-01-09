const { validationResult } = require('express-validator');
const { Users } = require('../database/models');

const bcrypt = require('bcrypt')

const api_users = {
    get: async( req, res) => {
        try {
            const user_id = req.tokenDecoded.id
            let userSearched = await Users.findByPk( user_id );

            let dataJson = JSON.stringify(userSearched)
            let userData = JSON.parse(dataJson)
            delete userData.id 

            return res.status(200).json(userData);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Users status-500 client-server error!"});
        }
    },
    post: async( req, res) => {
        try {
            const {errors} = validationResult(req);
            if(errors.length){
                return res.status(400).json(errors);
            };

            req.body.password = bcrypt.hashSync(req.body.password, 10);
            req.body.id = undefined

            await Users.create(req.body);

            return res.status(201).json({msg:"usuario criado com sucesso!"});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Users status-500 client-server error!"});
        }
    },
    put: async( req, res) => {
        try {
            const {errors} = validationResult(req);
            if(errors.length){
                return res.status(400).json(errors);
            };
            
            if(req.body.password){
                req.body.password = bcrypt.hashSync(req.body.password, 10)
            }
            const {id} = req.tokenDecoded

            req.body.id ?  delete req.body.id : '';

            let response = await Users.findByPk(id);
            
            let updated = await response.update(req.body);
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Users status-500 client-server error!"});
        }
    },
    delete: async( req, res) => {
        try {
            const {id} = req.tokenDecoded

            let response = await Users.destroy({where:{ id: id }});
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Users status-500 client-server error!"});
        }
    },

    /* advence searchings by user */
    user: async (req, res) => {
        try {
            const {id} = req.tokenDecoded

            let userData = await Users.findByPk( id );
            userData.dataValues.id = undefined
            userData._previousDataValues.id = undefined
            
            return res.status(200).json(userData);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [users-findByPk]GET status-500 client-server error!"});
        }
    },
    user_settings:async (req, res) => {
        try {
            const {id} = req.tokenDecoded

            let response = await Users.findOne({
                where:{id: id },
                include:'settings'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user.settings]GET status-500 client-server error!"});
        }
    },
    user_category:async (req, res) => {
        try {
            const {id} = req.tokenDecoded

            let response = await Users.findOne({
                where:{id: id },
                include:'category'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user.category]GET status-500 client-server error!"});
        }
    },
    user_budgets:async (req, res) => {
        try {
            const {id} = req.tokenDecoded

            let response = await Users.findOne({
                where:{id: id },
                include:'budgets'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user.budgets]GET status-500 client-server error!"});
        }
    },
    user_goals:async (req, res) => {
        try {
            const {id} = req.tokenDecoded

            let response = await Users.findOne({
                where:{id: id },
                include:'goals'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user.goals]GET status-500 client-server error!"});
        }
    },
    user_transactions:async (req, res) => {
        try {
            const {id} = req.tokenDecoded

            let response = await Users.findOne({
                where:{id: id },
                include:'transactions'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user.transactions]GET status-500 client-server error!"});
        }
    },
    user_linked_accounts:async (req, res) => {
        try {
            const {id} = req.tokenDecoded

            let response = await Users.findOne({
                where:{id: id },
                include:'linked_accounts'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user.linked_accounts]GET status-500 client-server error!"});
        }
    },
    user_support:async (req, res) => {
        try {
            const {id} = req.tokenDecoded

            let response = await Users.findOne({
                where:{id: id },
                include:'support_tickets'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user.support]GET status-500 client-server error!"});
        }
    },
}

module.exports = api_users;