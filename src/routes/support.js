const express = require('express');
const router = express.Router();

//import controller
const api_support = require('../controller/api_support');

router.get('/', api_support.get);
router.post('/', api_support.post);
router.put('/', api_support.put);
router.delete('/', api_support.delete);

module.exports = router;
