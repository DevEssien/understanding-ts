"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AutoBind = (_target, _methodName, descriptor) => {
    const originalMethod = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
};
class ProjectInput {
    constructor() {
        this.templateElement = (document.querySelector("#project-input"));
        this.hostElement = document.querySelector("#app");
        const importFormElement = document.importNode(this.templateElement.content, true);
        this.formElement = importFormElement.firstElementChild;
        this.formElement.id = 'user-input';
        this.titleInputElement = this.formElement.querySelector('#title');
        this.descriptionInputElement = this.formElement.querySelector('#description');
        this.peopleInputElement = this.formElement.querySelector('#people');
        this.configure();
        this.render();
    }
    submitHandler(event) {
        var _a;
        event.preventDefault();
        console.log((_a = this.titleInputElement) === null || _a === void 0 ? void 0 : _a.value);
    }
    configure() {
        this.formElement.addEventListener('submit', this.submitHandler);
    }
    render() {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
}
__decorate([
    AutoBind
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
//# sourceMappingURL=app.js.map