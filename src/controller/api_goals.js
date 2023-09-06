const { Goals } = require('../database/models');

const api_goals = {
    get: async( req, res) => {
        try {
            const response = await Goals.findAll()

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Goals status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        try {
            const response = await Goals.create(req.body)
            return res.status(201).json({response});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Goals status-500 client-server error!"})
        }
    },
    put: async( req, res) => {
        try {
            const {id} = req.body

            let response = await Goals.findByPk(id)
            delete req.body.id
            let updated = await response.update(req.body)
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Goals status-500 client-server error!"})
        }
    },
    delete: async( req, res) => {
        try {
            const {id} = req.body

            let response = await Goals.destroy({where:{id:id}})
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Goals status-500 client-server error!"})
        }
    },

    /* advance search */
    id_goals:async (req, res) => {
        try {
            let response = await Goals.findOne({ where: { id: Number( req.body.id ) } });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [id_goals-findOne]GET status-500 client-server error!"});
        }
    },
    
    user_goals:async (req, res) => {
        try {
            let response = await Goals.findAll({
                where:{user_id:Number(req.body.id)}
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user_goals-findAll]GET status-500 client-server error!"});
        }
    },
}

module.exports = api_goals;