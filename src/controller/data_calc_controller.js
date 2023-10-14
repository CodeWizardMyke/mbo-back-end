const { Transactions }= require('../database/models')

const data_calc = {
    balance: async (req, res) => {
        const user_id = req.tokenDecoded.id

        const data = await Transactions.findAll({where:{user_id: user_id}})
        return res.send(data)
    }
}

module.exports = data_calc;
