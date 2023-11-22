"use strict";
const mergeObject = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
const obj = mergeObject({ a: 2, b: 3 }, { c: 3, d: 4 });
console.log(obj.c);
//# sourceMappingURL=app.js.map