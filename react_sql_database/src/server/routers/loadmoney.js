const router = require('express').Router();
const controller = require('../controller');

router.get('/',controller.money.get);

module.exports = router