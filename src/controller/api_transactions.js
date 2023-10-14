const { validationResult } = require('express-validator');
const { Transactions } = require('../database/models');

const convertDateToAmericanFormat = require('../functions/convertDateToAmericanFormat')

const api_transactions = {
    get: async( req, res) => {
        try {
            const {id} = req.tokenDecoded

            const response = await Transactions.findAll({ where:{user_id:id}, include:'category' })

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Transactions status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        const { errors } = validationResult(req);
        if( errors.length ){return res.status(400).json(errors); };

        try {
            req.body.date = convertDateToAmericanFormat(req.body.date)
            req.body.user_id = req.tokenDecoded.id

            const response = await Transactions.create(req.body)
            
            return res.status(201).json({response});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Transactions status-500 client-server error!"})
        }
    },
    put: async( req, res) => {
        try {
            const {id} = req.params
            const user_id = req.tokenDecoded.id

            let response = await Transactions.findOne({where:{id:id, user_id: user_id}})
            let updated = await response.update(req.body)
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Transactions status-500 client-server error!"})
        }
    },
    delete: async( req, res) => {
        try {
            const {id} = req.params
            const user_id = req.tokenDecoded.id

            const response = await Transactions.destroy({where:{ id:id, user_id: user_id }})
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Transactions status-500 client-server error!"})
        }
    },

    /* advance search */
    id_transactions:async (req, res) => {
        try {
            const user_id = req.tokenDecoded.id
            const {id} = req.params

            let response = await Transactions.findOne({
                where:{id: id, user_id:user_id},
                include:'category'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [id_transactions.category-findOne]GET status-500 client-server error!"});
        }
    },
    type_transactions:async (req, res) => {
        try {
            const user_id = req.tokenDecoded.id
            const {id} = req.params

            let response = await Transactions.findAll({
                where:{type: id, user_id:user_id},
                include:'category'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [id_transactions.category-findOne]GET status-500 client-server error!"});
        }
    },
    category_id_transactions:async (req, res) => {
        try {
            const user_id = req.tokenDecoded.id
            const {id} = req.params

            let response = await Transactions.findAll({
                where:{category_id: id, user_id:user_id},
                include:'category'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [id_transactions.category-findOne]GET status-500 client-server error!"});
        }
    },
}

module.exports = api_transactions;