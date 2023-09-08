const express = require('express');
const router = express.Router();

//import controller
const api_support = require('../controller/api_support');
const user_auth = require('../middlewares/user_auth')

router.get('/', user_auth, api_support.get);
router.post('/', user_auth, api_support.post);
router.put('/', user_auth, api_support.put);
router.delete('/', user_auth, api_support.delete);

router.get('/id', user_auth, api_support.id_support);

module.exports = router;
