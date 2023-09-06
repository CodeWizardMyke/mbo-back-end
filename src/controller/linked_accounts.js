const { Linked_accounts } = require('../database/models');

const api_Linked_accounts = {
    get: async( req, res) => {
        try {
            const response = await Linked_accounts.findAll()

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [GET]Linked_accounts status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        try {
            const response = await Linked_accounts.create(req.body)
            return res.status(201).json({response});
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [POST]Linked_accounts status-500 client-server error!"})
        }
    },
    put: async( req, res) => {
        try {
            const {id} = req.body

            let response = await Linked_accounts.findByPk(id)
            delete req.body.id
            let updated = await response.update(req.body)
            
            return res.status(200).json(updated);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [PUT]Linked_accounts status-500 client-server error!"})
        }
    },
    delete: async( req, res) => {
        try {
            const {id} = req.body

            let response = await Linked_accounts.destroy({where:{id:id}})
            
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Original Error [DELETE]Linked_accounts status-500 client-server error!"})
        }
    },

        /* advance search */
        id_linked_accounts:async (req, res) => {
            try {
                let response = await Linked_accounts.findOne({
                    where:{id: Number(req.body.id)},
                    include:"category"
                });
    
                return res.status(200).json(response);
            } catch (error) {
                console.log(error);
                return res.status(500).json({msg:"Original Error [id_linkedaccounts-findOne]GET status-500 client-server error!"});
            }
        },
        
        user_linked_accounts:async (req, res) => {
            try {
                let response = await Linked_accounts.findAll({
                    where:{user_id: Number(req.body.id)},
                    include:'category'
                });
    
                return res.status(200).json(response);
            } catch (error) {
                console.log(error);
                return res.status(500).json({msg:"Original Error [linkedaccounts.user-findAll]GET status-500 client-server error!"});
            }
        },
}

module.exports = api_Linked_accounts;