const { validationResult } = require('express-validator');
const { Transactions, Category } = require('../database/models');

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
        const {errors} = validationResult(req);
        if(errors.length){
            return res.status(400).json(errors);
        };

        try {
            const {id} = req.tokenDecoded
            const {new_category} = req.body

            if(new_category){
                const {id} = await Category.create(req.body.new_category);
                req.body.category_id = id;
            }

            req.body.date = convertDateToAmericanFormat(req.body.date)
            req.body.user_id = id
            const response = await Transactions.create(req.body)
            
            return res.status(201).json({response});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Transactions status-500 client-server error!"})
        }
    },
    put: async( req, res) => {
        try {
            const {id} = req.body
            const user_id = req.tokenDecoded.id

            let response = await Transactions.findOne({where:{id:id, user_id: user_id}})
            delete req.body.id
            let updated = await response.update(req.body)
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Transactions status-500 client-server error!"})
        }
    },
    delete: async( req, res) => {
        try {
            const {id} = req.body
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

            let response = await Transactions.findAll({
                where:{id: Number(req.body.id), user_id:user_id},
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