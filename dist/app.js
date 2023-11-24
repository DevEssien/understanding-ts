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
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookElement = document.querySelector(`#${hookId}`);
                if (!hookElement)
                    return;
                hookElement.innerHTML = template;
                hookElement.querySelector('h1').textContent = this.name;
            }
        };
    };
};
const Autobind = (_target, _methodName, descriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
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
class Printer {
    constructor() {
        this.message = 'This works';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const printer = new Printer();
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', printer.showMessage);
//# sourceMappingURL=app.js.map