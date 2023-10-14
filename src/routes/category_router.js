const express = require('express');
const router = express.Router();

//import controller
const api_category = require('../controller/api_category');
const user_auth = require('../middlewares/user_auth');

router.get('/', user_auth, api_category.get);
router.post('/', user_auth, api_category.post);

router.put('/:id', user_auth, api_category.put);
router.delete('/:id', user_auth, api_category.delete);
router.get('/:id', user_auth, api_category.id_category);

module.exports = router;
