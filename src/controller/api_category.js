const { Category } = require('../database/models');

const api_category = {
    get: async( req, res) => {
        try {
            const response = await Category.findAll()

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Category status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        try {
            const response = await Category.create(req.body)
            return res.status(201).json({response});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Category status-500 client-server error!"})
        }
    },
    put: async( req, res) => {
        try {
            const {id} = req.body

            let response = await Category.findByPk(id)
            delete req.body.id
            let updated = await response.update(req.body)
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Category status-500 client-server error!"})
        }
    },
    delete: async( req, res) => {
        try {
            const {id} = req.body

            let response = await Category.destroy({where:{id:id}})
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Category status-500 client-server error!"})
        }
    },

    /* advance search */
    id_category:async (req, res) => {
        try {
            let response = await Category.findOne({ where: { id: Number( req.body.id ) } });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [id_category-findOne]GET status-500 client-server error!"});
        }
    },
    
    user_category:async (req, res) => {
        try {
            let response = await Category.findAll({
                where:{user_id:Number(req.body.id)}
            });

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [user_category-findAll]GET status-500 client-server error!"});
        }
    },
}

module.exports = api_category;