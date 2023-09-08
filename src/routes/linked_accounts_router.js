const express = require('express');
const router = express.Router();

//import controller
const linked_accounts = require('../controller/api_linked_accounts');
const user_auth = require('../middlewares/user_auth');

router.get('/', user_auth, linked_accounts.get);
router.post('/', user_auth, linked_accounts.post);
router.put('/', user_auth, linked_accounts.put);
router.delete('/', user_auth, linked_accounts.delete);

//advance search
router.get('/id', user_auth, linked_accounts.id_linked_accounts);

module.exports = router;
