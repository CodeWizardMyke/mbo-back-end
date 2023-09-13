const express = require('express');
const router = express.Router();

const authentication_controller = require('../controller/authentication');
const check_users_fields = require('../functions/express-validator/check_users')

router.post('/login', check_users_fields.singin, authentication_controller.login);

module.exports = router;