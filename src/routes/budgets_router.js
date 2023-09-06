const express = require('express');
const router = express.Router();

//import controller
const api_budgets = require('../controller/api_budgets');

router.get('/', api_budgets.get);
router.post('/', api_budgets.post);
router.put('/', api_budgets.put);
router.delete('/', api_budgets.delete);

/* advance search */
router.get('/id', api_budgets.id_budgets);
router.get('/user', api_budgets.user_budgets);

module.exports = router;
