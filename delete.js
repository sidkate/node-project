const { loadJsonContent, saveJsonContent } = require('./files.js');
const { catalogFilePath, rl } = require('./globals.js');

const deleteFromCatalog = (callback) => {
    const catalog = loadJsonContent(catalogFilePath, []);
    const processIndexValue = (value) => {
        let deleted;
        for (let item of catalog) {
            if (value == item.id) {
                let idxToRemove = catalog.indexOf(item);
                deleted = catalog.splice(idxToRemove, 1);
                break;
            }
        }
        if (deleted) {
            console.log("catalog after delete:");
            console.log(catalog);
            console.log("deleted item:");
            console.log(deleted);
            saveJsonContent(catalogFilePath, catalog);
        } else {
            console.log("item not found");
        }
        callback();
    }
    console.log("catalog contains: ");
    console.log(catalog);// JSON.stringify(catalog, null, 2));
    rl.question("input item index to remove from catalog:\n", processIndexValue);
}

module.exports = {
    deleteFromCatalog
}