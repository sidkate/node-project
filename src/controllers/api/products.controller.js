const { Router, request } = require('express');
const productsRepository = require('../../repositories/products.repository');

const router = new Router();

router.get('/', async (_request, response) => {
    const products = await productsRepository.getAll();
    response.json(products);
});

router.get('/:id', async (request, response) => {
    const product = await productsRepository.get(request.params.id);
    if (product) {
        response.json(product);
        return;
    }

    response.status(404).send(`product not found: ${request.params.id}`);
});

router.post('/', async (request, response) => {
    const product = await productsRepository.add(request.body);
    if (product) {
        response
            .status(201)
            .json(product);
    }

    response.status(404).send('cannot create product');
});

router.patch('/:id', async (request, response) => {
    const patched = await productsRepository.patch(request.params.id, request.body);
    if (patched) {
        response
            .status(201)
            .json(patched);
    }
    response.status(404).send(`product not found: ${request.params.id}`);
});

router.put("/:id", async (request, response) => {
    const updated = await productsRepository.update(request.params.id, request.body);

    if (updated) {
        response
            .status(201)
            .json(updated);
    }

    response.status(404).send(`product not found: ${request.params.id}`);
});

router.delete("/:id", async (request, response) => {
    const deleted = await productsRepository.delete(request.params.id);
    if (deleted) {
        response
            .status(201)
            .json(deleted);
    }
    response.status(404).send(`product not found: ${request.params.id}`);
});

module.exports = router;