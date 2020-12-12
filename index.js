const { menu } = require('./menu.js');

const menuItems = {
    1: { text: "list catalog", func: (cb) => { /* some logic */ cb() } },
    2: { text: "add product to catalog", func: (cb) => { cb()/* some logic */ } },
    3: { text: "delete product from catalog", func: (cb) => { cb()/* some logic */ } },
    4: { text: "change product in catalog", func: (cb) => { cb()/* some logic */ } },
    0: { text: "exit", func: (cb) => { process.exit(0) } },
}

menu("Введите пункт меню: ", menuItems);