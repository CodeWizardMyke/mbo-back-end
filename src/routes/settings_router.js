const express = require('express');
const router = express.Router();

//import controller
const api_settings = require('../controller/api_settings');
const user_auth = require('../middlewares/user_auth');

router.get('/', user_auth, api_settings.get);
router.post('/', user_auth, api_settings.post);
router.put('/', user_auth, api_settings.put);
router.delete('/', user_auth, api_settings.delete);

router.get('/id', user_auth, api_settings.id_settings);

module.exports = router;
