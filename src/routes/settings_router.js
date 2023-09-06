const express = require('express');
const router = express.Router();

//import controller
const api_settings = require('../controller/api_settings');

router.get('/', api_settings.get);
router.post('/', api_settings.post);
router.put('/', api_settings.put);
router.delete('/', api_settings.delete);

module.exports = router;
