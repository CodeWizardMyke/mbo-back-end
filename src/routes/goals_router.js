const express = require('express');
const router = express.Router();

//import controller
const api_goals = require('../controller/api_goals');

router.get('/', api_goals.get);
router.post('/', api_goals.post);
router.put('/', api_goals.put);
router.delete('/', api_goals.delete);

module.exports = router;
