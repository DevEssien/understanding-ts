// const list: Array<string> = []

// const promise: Promise<string>  = new Promise((resolve, reject) => {
//     const r = 'red'
//     if (r === 'red') resolve('red');
// });

// promise.then(data => {
//     data.toUpperCase()
// })

// const mergeObject = <T extends object, U extends object>( obj1: T, obj2: U ) => {
//     return { ...obj1, ...obj2 }
// }
// const obj = mergeObject({a: 2, b: 3}, {c: 3, d: 4});
// console.log(obj.c)

// interface Lengthy {
//   length: number;
// }

// const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
//   let description = "Got no value";
//   if (element.length === 1) description = "Got 1 element";
//   else if (element.length > 1) description = `Got ${element.length} elements`;
//   return [element, description];
// };
// console.log(countAndDescribe(["clear", "copy", "insert"]));

// const extractAndConvert = <T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) => {
//     return 'value ' + obj[key];
// };
// extractAndConvert({name: 'Max'}, 'name');


class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) return
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [ ...this.data]
    }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem('Max');
stringStorage.addItem('Manu');
stringStorage.removeItem('Manu');
console.log(stringStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(2);
console.log(numberStorage.getItems());
