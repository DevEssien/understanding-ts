"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const stringStorage = new DataStorage();
stringStorage.addItem('Max');
stringStorage.addItem('Manu');
stringStorage.removeItem('Manu');
console.log(stringStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(2);
console.log(numberStorage.getItems());
//# sourceMappingURL=app.js.map