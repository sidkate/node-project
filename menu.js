const { rl } = require('./globals.js');

const menu = (menuHeader, items) => {
    let queryText = menuHeader + "\n";
    for (let index in items) {
        let item = items[index];
        queryText += index + " - " + item.text + ";\n";
    }

    let showMenu = () => {
        rl.question(queryText, callback);
    }

    let callback = (number) => {
        let item = items[number];
        if (item) {
            item.func(showMenu);
        } else {
            rl.question(`Введено недопустимое значение!\n`, callback);
            //return;
        }
        //rl.close();
    };
    showMenu();
}

module.exports = {
    menu
}