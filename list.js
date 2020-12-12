const { loadJsonContent } = require('./files.js');
const { catalogFilePath } = require('./globals.js');

const listCatalog = (callback) => {
    const catalog = loadJsonContent(catalogFilePath, []);
    console.log("catalog contains:");
    console.log(catalog);
    callback();
}

module.exports = {
    listCatalog
}