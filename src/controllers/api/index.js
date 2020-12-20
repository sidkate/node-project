const { Router } = require('express');
//const usersController = require('./users.controller');
const productsController = require('./products.controller');

const router = new Router();

//router.use('/users', usersController);

router.use('/products', productsController);

module.exports = router;