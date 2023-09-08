const express = require('express');
const router = express.Router();

//import controller
const api_budgets = require('../controller/api_budgets');
const user_auth = require('../middlewares/user_auth');

router.get('/', user_auth, api_budgets.get);
router.post('/', user_auth, api_budgets.post);
router.put('/', user_auth, api_budgets.put);
router.delete('/', user_auth, api_budgets.delete);

/* advance search */
router.get('/id', user_auth, api_budgets.id_budgets);

module.exports = router;
