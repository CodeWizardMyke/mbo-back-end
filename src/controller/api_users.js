const { validationResult } = require('express-validator');
const { Users } = require('../database/models');

const api_users = {
    get: async( req, res) => {
        try {
            const response = await Users.findAll();

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Users status-500 client-server error!"});
        }
    },
    post: async( req, res) => {
        try {
            const {errors} = validationResult(req);
            if(errors.length){
                return res.status(400).json({errors:errors});
            };

            const response = await Users.create(req.body);
            return res.status(201).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Users status-500 client-server error!"});
        }
    },
    put: async( req, res) => {
        try {
            const {errors} = validationResult(req);
            if(errors.length){
                return res.status(400).json({errors:errors});
            };
            
            let response = await Users.findByPk(Number(req.body.id));
            delete req.body.id;
            let updated = await response.update(req.body);
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Users status-500 client-server error!"});
        }
    },
    delete: async( req, res) => {
        try {
            let response = await Users.destroy({where:{id:Number(req.body.id)}});
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Users status-500 client-server error!"});
        }
    },

    /* advence searchings by user */

    user: async (req, res) => {
        try {
            let response = await Users.findByPk( Number(req.body.id) );
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [users-findByPk]GET status-500 client-server error!"});
        }
    },
    user_settings:async (req, res) => {
        try {
            let response = await Users.findOne({
                where:{id:Number(req.body.id)},
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
            let response = await Users.findOne({
                where:{id: Number(req.body.id) },
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
            let response = await Users.findOne({
                where:{id: Number(req.body.id) },
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
            let response = await Users.findOne({
                where:{id: Number(req.body.id) },
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
            let response = await Users.findOne({
                where:{id: Number(req.body.id) },
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
            let response = await Users.findOne({
                where:{id: Number(req.body.id) },
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
            let response = await Users.findOne({
                where:{id: Number(req.body.id) },
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