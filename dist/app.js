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
const registeredValidators = {};
function Required(target, propertyName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propertyName]: ['required'] });
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function Validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig)
        return true;
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const form = document.querySelector('form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    const titleElem = this.querySelector('#title');
    const priceElem = this.querySelector('#price');
    const price = +(priceElem === null || priceElem === void 0 ? void 0 : priceElem.value);
    const title = titleElem === null || titleElem === void 0 ? void 0 : titleElem.value;
    const createdCourse = new Course(title, price);
    if (!Validate(createdCourse)) {
        alert('- Invalid input');
        return;
    }
    console.log(createdCourse, Validate(createdCourse));
    const h1 = document.createElement('h1');
    h1.innerText = `${title} is sold at the price of $${price}`;
    document.body.append(h1);
});
//# sourceMappingURL=app.js.map