const { Transactions } = require('../database/models');

const convertDateToAmericanFormat = require('../functions/convertDateToAmericanFormat')

const api_transactions = {
    get: async( req, res) => {
        try {
            const response = await Transactions.findAll()

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Transactions status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        try {

            req.body.date = convertDateToAmericanFormat(req.body.date)
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

            let response = await Transactions.findByPk(id)
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

            let response = await Transactions.destroy({where:{id:id}})
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Transactions status-500 client-server error!"})
        }
    },
}

module.exports = api_transactions;