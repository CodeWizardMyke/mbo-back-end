const { Transactions }= require('../database/models')

const calculate_balance = require('../functions/calc/calculate_balance')

const data_calc = {
    balance: async (req, res) => {
        const user_id = req.tokenDecoded.id

        const data = await Transactions.findAll({where:{user_id: user_id}})

        const balance = calculate_balance(data)

        return res.json(balance)
    }
}

module.exports = data_calc;
