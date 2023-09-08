const { Budgets } = require('../database/models');

const api_Budgets = {
    get: async( req, res) => {
        try {
            const user_id = req.tokenDecoded.id
            const response = await Budgets.findAll({where:{user_id:user_id}})

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Budgets status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        try {
            req.body.user_id = req.tokenDecoded.id
            const response = await Budgets.create(req.body)

            return res.status(201).json({response});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Budgets status-500 client-server error!"})
        }
    },
    put: async( req, res) => {
        try {
            const {id} = req.body
            const user_id = req.tokenDecoded.id

            let response = await Budgets.findOne({where:{id:id, user_id:user_id}})
            delete req.body.id
            let updated = await response.update(req.body)
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Budgets status-500 client-server error!"})
        }
    },
    delete: async( req, res) => {
        try {
            const {id} = req.body
            const user_id = req.tokenDecoded.id

            let response = await Budgets.destroy({where:{id:id, user_id:user_id }})
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Budgets status-500 client-server error!"})
        }
    },

    id_budgets:async (req, res) => {
        try {
            const user_id = req.tokenDecoded.id
            let response = await Budgets.findOne({
                where:{id: Number(req.body.id), user_id:user_id },
                include:'category'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [id_budgets.category-findOne]GET status-500 client-server error!"});
        }
    },
}

module.exports = api_Budgets;