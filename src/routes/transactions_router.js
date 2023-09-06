const express = require('express');
const router = express.Router();

//import controller
const api_Transactions = require('../controller/api_transactions');

router.get('/', api_Transactions.get);
router.post('/', api_Transactions.post);
router.put('/', api_Transactions.put);
router.delete('/', api_Transactions.delete);

module.exports = router;
