const { listCatalog } = require('./list.js');
const { addToCatalog } = require('./add.js');
const { deleteFromCatalog } = require('./delete.js');
const { changeInCatalog } = require('./change.js');
const { menu } = require('./menu.js');

const menuItems = {
    1: { text: "list catalog", func: (cb) => { listCatalog(cb) } },
    2: { text: "add product to catalog", func: (cb) => { addToCatalog(cb) } },
    3: { text: "delete product from catalog", func: (cb) => { deleteFromCatalog(cb) } },
    4: { text: "change product in catalog", func: (cb) => { changeInCatalog(cb) } },
    0: { text: "exit", func: (cb) => { process.exit(0) } },
}

menu("Введите пункт меню: ", menuItems);