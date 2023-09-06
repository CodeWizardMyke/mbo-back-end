const express = require('express');
const router = express.Router();

//import controller
const api_users = require('../controller/api_users');

/* routes by crud model */
router.get('/', api_users.get);
router.post('/', api_users.post);
router.put('/', api_users.put);
router.delete('/', api_users.delete);

/* routes by searching models for user */
router.get('/category', api_users.user_category);
router.get('/goals', api_users.user_goals);
router.get('/budgets', api_users.user_budgets);
router.get('/linked.accounts', api_users.user_linked_accounts);
router.get('/settings', api_users.user_settings);
router.get('/transactions', api_users.user_transactions);
router.get('/support', api_users.user_support);

module.exports = router;
