const express = require('express');
const router = express.Router();

//import controller
const api_Transactions = require('../controller/api_transactions');
const user_auth = require('../middlewares/user_auth')

//functions
const check_transaction = require('../functions/express-validator/check_transaction');

//middlewares
const transactionCreateCategory = require('../middlewares/transaction.category.create');

router.get('/', user_auth, api_Transactions.get);
router.post('/', user_auth, transactionCreateCategory, check_transaction, api_Transactions.post);
router.put('/:id', user_auth, api_Transactions.put);
router.delete('/:id', user_auth, api_Transactions.delete);

//advance search
router.get('/:id', user_auth, api_Transactions.id_transactions);
router.get('/type', user_auth, api_Transactions.type_transactions)
router.get('/category/:id', user_auth, api_Transactions.category_id_transactions)

module.exports = router;
