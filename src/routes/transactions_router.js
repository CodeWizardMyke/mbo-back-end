const express = require('express');
const router = express.Router();

//import controller
const api_Transactions = require('../controller/api_transactions');
const user_auth = require('../middlewares/user_auth')

router.get('/', user_auth, api_Transactions.get);
router.post('/', user_auth, api_Transactions.post);
router.put('/', user_auth, api_Transactions.put);
router.delete('/', user_auth, api_Transactions.delete);

//advance search
router.get('/id', user_auth, api_Transactions.id_transactions);

module.exports = router;
