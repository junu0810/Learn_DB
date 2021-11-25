const express = require('express');
const router = express.Router();
const loadname = require('./loadname');
const loadmoney = require('./loadmoney');


router.use('/name', loadname);
router.use('/money',loadmoney);

module.exports = router