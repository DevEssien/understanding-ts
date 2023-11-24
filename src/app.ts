class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  formElement: HTMLFormElement;

  constructor() {
    this.templateElement = <HTMLTemplateElement>(
      document.querySelector("#project-input")!
    );
    this.hostElement = <HTMLDivElement>document.querySelector("#app")!;

    const importFormElement = document.importNode(this.templateElement.content, true);
    this.formElement = <HTMLFormElement>importFormElement.firstElementChild!;

    this.render();

  }

  private render() {
    this.hostElement.insertAdjacentElement('afterbegin', this.formElement)
  }
}

new ProjectInput()