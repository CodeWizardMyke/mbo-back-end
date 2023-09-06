const { Budgets } = require('../database/models');

const api_Budgets = {
    get: async( req, res) => {
        try {
            const response = await Budgets.findAll()

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Budgets status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        try {
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

            let response = await Budgets.findByPk(id)
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

            let response = await Budgets.destroy({where:{id:id}})
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Budgets status-500 client-server error!"})
        }
    },

    id_budgets:async (req, res) => {
        try {
            let response = await Budgets.findOne({
                where:{id: Number(req.body.id) },
                include:'category'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [id_budgets.category-findOne]GET status-500 client-server error!"});
        }
    },
    
    user_budgets:async (req, res) => {
        try {
            let response = await Budgets.findAll({
                where:{user_id: Number(req.body.id) },
                include:'category'
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user_budgets.category-findAll]GET status-500 client-server error!"});
        }
    },
    

}

module.exports = api_Budgets;