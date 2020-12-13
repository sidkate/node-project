const { loadJsonContent, saveJsonContent } = require('./files.js');
const { catalogFilePath, rl } = require('./globals.js');

const changeInCatalog = (callback) => {
    const catalog = loadJsonContent(catalogFilePath, []);
    let found;
    const processIndexValue = (value) => {
        for (let item of catalog) {
            if (value == item.id) {
                found = item;
                rl.question("input json to change item:\n", processJsonValue);
                return;
            }
        }
        if (!found) {
            console.log("item not found");
            callback();
        }
    }

    const processJsonValue = (value) => {
        let newObject;
        try {
            newObject = JSON.parse(value);
        } catch (error) {
            rl.question("invalid json, please try again...\n", processJsonValue);
            return;
        }
        catalog[catalog.indexOf(found)] = newObject;
        console.log("catalog after change:");
        console.log(catalog);
        saveJsonContent(catalogFilePath, catalog);
        callback();
    }

    console.log("catalog contains: ");
    console.log(catalog);// JSON.stringify(catalog, null, 2));
    rl.question("input item ID to change:\n", processIndexValue);
}

module.exports = {
    changeInCatalog
}