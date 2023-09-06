const express = require('express');
const router = express.Router();

//import controller
const api_category = require('../controller/api_category');

router.get('/', api_category.get);
router.post('/', api_category.post);
router.put('/', api_category.put);
router.delete('/', api_category.delete);

router.get('/id', api_category.id_category);
router.get('/user', api_category.user_category);

module.exports = router;
