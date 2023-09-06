const express = require('express');
const router = express.Router();

//import controller
const linked_accounts = require('../controller/linked_accounts');

router.get('/', linked_accounts.get);
router.post('/', linked_accounts.post);
router.put('/', linked_accounts.put);
router.delete('/', linked_accounts.delete);

module.exports = router;
