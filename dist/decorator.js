"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const Log = (target, propertyName) => {
    console.log('Property Decorator!');
    console.log(target, propertyName);
};
const Log2 = (target, name, descriptor) => {
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log3 = (target, name, descriptor) => {
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log4 = (target, parentMethodName, position) => {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(parentMethodName);
    console.log(position);
};
class Product {
    set price(value) {
        if (value < 0)
            throw new Error('Invalid price - should be positive value');
        this._price = value;
    }
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=decorator.js.map