"use strict";
const add = (...numbers) => {
    return numbers.reduce((total, currentVal) => {
        return total + currentVal;
    }, 0);
};
console.log(add(1, 2, 3, 4, 5, 6));
//# sourceMappingURL=app.js.map