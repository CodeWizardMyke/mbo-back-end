const express = require('express');
const router = express.Router();

//import controller
const linked_accounts = require('../controller/linked_accounts');

router.get('/', linked_accounts.get);
router.post('/', linked_accounts.post);
router.put('/', linked_accounts.put);
router.delete('/', linked_accounts.delete);

//advance search
router.get('/id', linked_accounts.id_linked_accounts);
router.get('/user', linked_accounts.user_linked_accounts);

module.exports = router;
