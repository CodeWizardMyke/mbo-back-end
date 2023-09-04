const {Users} = require('../database/models');

const api_users = {
    get: async( req, res) => {
        try {
            const response = await Users.findAll()

            console.log({msg:'connection [GET]Users successful'});
            console.log(response)

            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.json({msg:"Original Error [GET]Users status-500 client-server error!"})
        }
    },
    post: async( req, res) => {
        try {
            const response = await Users.create(req.body)
            console.log({msg:'connection [POST]Users successful'});
            return res.status(201).json({response});
        } catch (error) {
            console.log(error);
            return res.json({msg:"Original Error [POST]Users status-500 client-server error!"})
        }
    },
    put: async( req, res) => {
        try {
            console.log({msg:'connection [PUT]Users successful'});
            return res.status(200).json({msg:'connection [PUT]Users successful'});
        } catch (error) {
            console.log(error);
            return res.json({msg:"Original Error [PUT]Users status-500 client-server error!"})
        }
    },
    delete: async( req, res) => {
        try {
            console.log({msg:'connection [DELETE]Users successful'})
        } catch (error) {
            console.log(error);
            return res.json({msg:"Original Error [DELETE]Users status-500 client-server error!"})
        }
    },
}

module.exports = api_users;