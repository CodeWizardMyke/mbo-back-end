const express = require('express');
const router = express.Router();

//import controller
const api_settings = require('../controller/api_settings');

router.get('/', api_settings.get);
router.post('/', api_settings.post);
router.put('/', api_settings.put);
router.delete('/', api_settings.delete);

router.get('/id', api_settings.id_settings);
router.get('/user', api_settings.user_settings);

module.exports = router;
