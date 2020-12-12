const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const catalogFilePath = path.resolve(__dirname, 'catalog.json');

module.exports = {
    catalogFilePath,
    rl
}