const express = require('express');
const router = express.Router();

//import controller
const api_Transactions = require('../controller/api_transactions');

router.get('/', api_Transactions.get);
router.post('/', api_Transactions.post);
router.put('/', api_Transactions.put);
router.delete('/', api_Transactions.delete);

//advance search
router.get('/id', api_Transactions.id_transactions);
router.get('/user', api_Transactions.user_transactions);

module.exports = router;
