const { Support_tickets } = require('../database/models');

const api_Support_tickets = {
    get: async( req, res) => {
        try {
            const user_id = req.tokenDecoded.id
            const response = await Support_tickets.findAll({where:{user_id:user_id}})

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Support_tickets status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        try {
            req.body.user_id = req.tokenDecoded.id

            const response = await Support_tickets.create(req.body)

            return res.status(201).json({response});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Support_tickets status-500 client-server error!"})
        }
    },
    put: async( req, res) => {
        try {
            const {id} = req.body
            const user_id = req.tokenDecoded.id

            let response = await Support_tickets.findOne({where:{id:id, user_id: user_id}})
            delete req.body.id

            let updated = await response.update(req.body)
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Support_tickets status-500 client-server error!"})
        }
    },
    delete: async( req, res) => {
        try {
            const {id} = req.body
            const user_id = req.tokenDecoded.id

            let response = await Support_tickets.destroy({where:{id:id, user_id:user_id}})
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Support_tickets status-500 client-server error!"})
        }
    },

    /* advance search */
    id_support:async (req, res) => {
        try {
            const user_id = req.tokenDecoded.id
            let response = await Support_tickets.findOne({ where: { id: Number( req.body.id ), user_id:user_id } });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [id_support-findOne]GET status-500 client-server error!"});
        }
    },
}

module.exports = api_Support_tickets;