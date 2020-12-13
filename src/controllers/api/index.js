const { Router } = require('express');
const usersController = require('./users.controller');

const router = new Router();

router.use('/users', usersController);

module.exports = router;