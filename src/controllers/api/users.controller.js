const { Router } = require('express');
const usersRepository = require('../../repositories/users.repository');

const router = new Router();

router.get('/', async (_request, response) => {
    const users = await usersRepository.getAll();
    response.json(users);
});

router.get('/:id', async(request, response) => {
    const user = await usersRepository.get(request.params.id);
    if (user) {
        response.json(user);
        return;
    }

    response.status(404);
});

router.post('/', async (request, response) => {
    const user = await usersRepository.add(request.body);
    response
        .status(201)
        .json(user);
});

module.exports = router;