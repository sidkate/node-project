const path = require('path');
const uuid = require('uuid');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), '..', 'data', 'catalog.json');

const productsRepository = {

    async getAll() {
        return await readJsonFile(FILE_PATH) || [];
    },

    async get(id) {
        const products = await this.getAll();
        return products.find(product => product.id === id);
    },

    async add(product) {
        const products = await this.getAll();
        const newProduct = {
            id: uuid.v1(),
            ...product
        };
        products.push(newProduct);

        await writeJsonFile(FILE_PATH, products);

        return newProduct;
    },

    async update(id, product) {
        product = {
            ...product,
            id: id
        }
        const products = await this.getAll();
        const found = products.find(product => product.id === id);

        if (!found)
            return undefined;

        products[products.indexOf(found)] = product;

        await writeJsonFile(FILE_PATH, products);

        return product;
    },

    async patch(id, productPatch) {
        productPatch = {
            ...productPatch,
            id: id
        }

        const products = await this.getAll();
        const found = products.find(product => product.id === id);

        if (!found)
            return undefined;

        productPatch = {
            ...found,
            ...productPatch,
            id: id
        }

        products[products.indexOf(found)] = productPatch;

        await writeJsonFile(FILE_PATH, products);

        return productPatch;
    },

    async delete(id) {
        const products = await this.getAll();
        const found = products.find(product => product.id === id);

        if (!found)
            return undefined;

        products.splice(products.indexOf(found), 1);

        await writeJsonFile(FILE_PATH, products);

        return found;
    }

};

module.exports = productsRepository;
