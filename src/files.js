const fs = require('fs');
const path = require('path');

const loadJsonContent = (filePath, defaultObject) => {
    const file = readFile(filePath);
    const content = file && JSON.parse(file) || defaultObject;
    return content;
}

const saveJsonContent = (filePath, content) => {
    const jsonContent = JSON.stringify(content, null, 2);
    fs.writeFileSync(filePath, jsonContent);
}

const readFile = (filePath) => {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath);
    }
    return null;
}

module.exports = {
    loadJsonContent,
    saveJsonContent
}