const { Router } = require('express');
const productsRepository = require('../repositories/products.repository');

const router = new Router();

router.get('/', async (_request, response) => {
    const products = await productsRepository.getAll();
    response.render('pages/products/view', { products });
});

router.get('/add', (_request, response) => {
    response.render('pages/products/add');
});

router.post('/add', async (request, response) => {
    await productsRepository.add(request.body);
    response.redirect('/products');
});

router.get('/edit/:id', async (_request, response) => {
    const product = await productsRepository.get(_request.params.id);
    response.render('pages/products/edit', { product });
});

router.post('/edit/:id', async (_request, response) => {
    const product = await productsRepository.update(_request.params.id, _request.body);
    response.redirect('/products');
});

module.exports = router;