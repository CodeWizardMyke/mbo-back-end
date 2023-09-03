const express = require('express');
const router = express.Router();

//import controller
const api_users = require('../controller/api_users');

router.get('/', api_users.get);
router.post('/', api_users.post);
router.put('/', api_users.put);
router.delete('/', api_users.delete);

module.exports = router;
