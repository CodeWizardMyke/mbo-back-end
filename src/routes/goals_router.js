const express = require('express');
const router = express.Router();

//import controller
const api_goals = require('../controller/api_goals');
const user_auth = require('../middlewares/user_auth');

router.get('/', user_auth, api_goals.get);
router.post('/', user_auth, api_goals.post);
router.put('/', user_auth, api_goals.put);
router.delete('/', user_auth, api_goals.delete);

//advance search
router.get('/id', user_auth, api_goals.id_goals);

module.exports = router;
