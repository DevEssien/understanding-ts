"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = (document.querySelector("#project-input"));
        this.hostElement = document.querySelector("#app");
        const importFormElement = document.importNode(this.templateElement.content, true);
        this.formElement = importFormElement.firstElementChild;
        this.render();
    }
    render() {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
}
new ProjectInput();
//# sourceMappingURL=app.js.map