"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validate(validateInput) {
    let isValid = true;
    if (validateInput.required) {
        isValid = isValid && validateInput.value.toString().trim().length !== 0;
    }
    if (validateInput.minLength != null &&
        typeof validateInput.value === "string") {
        isValid = isValid && validateInput.value.length >= validateInput.minLength;
    }
    if (validateInput.maxLength != null &&
        typeof validateInput.value === "string") {
        isValid = isValid && validateInput.value.length <= validateInput.maxLength;
    }
    if (validateInput.min != null && typeof validateInput.value === "number") {
        isValid = isValid && validateInput.value >= validateInput.min;
    }
    if (validateInput.max != null && typeof validateInput.value === "number") {
        isValid = isValid && validateInput.value <= validateInput.max;
    }
    return isValid;
}
function AutoBind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        },
    };
}
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = (document.querySelector("#project-list"));
        this.hostElement = document.querySelector("#app");
        const importSectionElement = document.importNode(this.templateElement.content, true);
        this.sectionElement = importSectionElement.firstElementChild;
        this.sectionElement.id = `${type}-projects`;
        this.render();
        this.attachContent();
    }
    attachContent() {
        const listId = `${this.type}-projects-list`;
        this.sectionElement.querySelector('ul').id = listId;
        this.sectionElement.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS';
    }
    render() {
        this.hostElement.insertAdjacentElement("beforeend", this.sectionElement);
    }
}
class ProjectInput {
    constructor() {
        this.templateElement = (document.querySelector("#project-input"));
        this.hostElement = document.querySelector("#app");
        const importFormElement = document.importNode(this.templateElement.content, true);
        this.formElement = importFormElement.firstElementChild;
        this.formElement.id = "user-input";
        this.titleInputElement = (this.formElement.querySelector("#title"));
        this.descriptionInputElement = (this.formElement.querySelector("#description"));
        this.peopleInputElement = (this.formElement.querySelector("#people"));
        this.configure();
        this.render();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidate = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidate = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidate = {
            value: +enteredPeople,
            required: true,
            min: 1,
        };
        if (!validate(titleValidate) ||
            !validate(descriptionValidate) ||
            !validate(peopleValidate))
            alert("invalid Inputs");
        else
            return [enteredTitle, enteredDescription, +enteredPeople];
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            console.log(title, description, people);
            this.clearInputs();
        }
    }
    configure() {
        this.formElement.addEventListener("submit", this.submitHandler);
    }
    render() {
        this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
    }
}
__decorate([
    AutoBind
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
//# sourceMappingURL=app.js.map