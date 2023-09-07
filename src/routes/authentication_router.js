const express = require('express');
const router = express.Router();

const authentication_controller = require('../controller/authentication');

router.get('/login', authentication_controller.login);

module.exports = router;