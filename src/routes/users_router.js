const express = require('express');
const router = express.Router();

//import controller
const api_users = require('../controller/api_users');
const check_users = require('../functions/express-validator/check_users');
const user_auth = require('../middlewares/user_auth');

/* routes by crud model */
router.get('/', user_auth, api_users.get);
router.post('/', check_users.post, api_users.post);
router.put('/', user_auth, check_users.put, api_users.put);
router.delete('/', user_auth, api_users.delete);

/* routes by searching models for user */
router.get('/category', user_auth, api_users.user_category);
router.get('/goals',  user_auth, api_users.user_goals);
router.get('/budgets',  user_auth, api_users.user_budgets);
router.get('/linked.accounts',  user_auth, api_users.user_linked_accounts);
router.get('/settings', user_auth, api_users.user_settings);
router.get('/transactions', user_auth, api_users.user_transactions);
router.get('/support', user_auth, api_users.user_support);

module.exports = router;
