"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Logger = (logString) => {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
};
const WithTemplate = (template, hookId) => {
    return function (constructor) {
        const hookElement = document.querySelector(`#${hookId}`);
        if (!hookElement)
            return;
        hookElement.innerHTML = template;
        console.log('Name: ', constructor.name);
    };
};
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('logging the person...');
    }
};
Person = __decorate([
    WithTemplate('<h1>My first decorator factory function</h1>', 'app')
], Person);
const person = new Person();
//# sourceMappingURL=decorator1.js.map