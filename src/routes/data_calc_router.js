const express = require('express');
const router = express.Router();

const data_calc_controller = require('../controller/data_calc_controller');
const user_auth = require('../middlewares/user_auth');

router.get('/balance', user_auth, data_calc_controller.balance);

module.exports = router;
