const { Router } = require('express');
const homeController = require('./home.controller');
//const usersController = require('./users.controller');
const productsController = require('./products.controller');
//const apiControllers = require('./api');

const router = new Router();

router.use('/', homeController);
//router.use('/users', usersController);
router.use('/products', productsController);
//router.use('/api', apiControllers);

module.exports = router;