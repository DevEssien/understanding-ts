"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(3, 5));
class Person {
    constructor(name) {
        this.gender = 'male';
        this.age = 20;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase, ' ', this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
const person = new Person('emrice');
person.greet('Hi, my name is');
//# sourceMappingURL=interface.js.map