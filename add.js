const { loadJsonContent, saveJsonContent } = require('./files.js');
const { catalogFilePath, rl } = require('./globals.js');

const addToCatalog = (callback) => {
    const catalog = loadJsonContent(catalogFilePath, []);
    const processJsonValue = (value) => {
        let newObject;
        try {
            newObject = JSON.parse(value);
        } catch (error) {
            rl.question("invalid json, please try again...\n", processJsonValue);
            return;
        }
        catalog.push(newObject);
        console.log("catalog after push:");
        console.log(catalog);
        saveJsonContent(catalogFilePath, catalog);
        callback();
    }
    console.log("catalog contains: ");
    console.log(catalog);// JSON.stringify(catalog, null, 2));
    rl.question("input json to add to catalog:\n", processJsonValue);
}

module.exports = {
    addToCatalog
}