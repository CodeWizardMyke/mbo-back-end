const express = require('express');
const router = express.Router();

//import controller
const public_views = require('../controller/public_views');

router.get('/', public_views.home);

module.exports = router;