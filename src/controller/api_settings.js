const { Settings } = require('../database/models');

const api_Settings = {
    get: async( req, res) => {
        try {
            const response = await Settings.findAll()

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Settings status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        try {
            const response = await Settings.create(req.body)
            return res.status(201).json({response});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Settings status-500 client-server error!"})
        }
    },
    put: async( req, res) => {
        try {
            const {id} = req.body

            let response = await Settings.findByPk(id)
            delete req.body.id
            let updated = await response.update(req.body)
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Settings status-500 client-server error!"})
        }
    },
    delete: async( req, res) => {
        try {
            const {id} = req.body

            let response = await Settings.destroy({where:{id:id}})
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Settings status-500 client-server error!"})
        }
    },   
    
    /* advance search */
    id_settings:async (req, res) => {
        try {
            let response = await Settings.findOne({ where: { id: Number( req.body.id ) } });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [id_settings-findOne]GET status-500 client-server error!"});
        }
    },
    
    user_settings:async (req, res) => {
        try {
            let response = await Settings.findAll({
                where:{user_id:Number(req.body.id)}
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user_settings-findAll]GET status-500 client-server error!"});
        }
    },
}

module.exports = api_Settings;