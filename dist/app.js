"use strict";
let user1;
user1 = {
    name: 'Max',
    age: 20,
    greet(phrase) {
        console.log(phrase, this.name);
    }
};
user1.greet('Hi there, my name is ');
//# sourceMappingURL=app.js.map