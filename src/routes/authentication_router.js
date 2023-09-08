const express = require('express');
const router = express.Router();

const authentication_controller = require('../controller/authentication');

router.post('/login', authentication_controller.login);

module.exports = router;