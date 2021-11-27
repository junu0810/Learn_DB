const router = require('express').Router();
const controller = require('../controller');

router.get('/',controller.name.get);

module.exports = router