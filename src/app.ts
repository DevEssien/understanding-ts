const AutoBind = (_target: any, _methodName: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this)
        }
    }
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = <HTMLTemplateElement>(
      document.querySelector("#project-input")!
    );
    this.hostElement = <HTMLDivElement>document.querySelector("#app")!;

    const importFormElement = document.importNode(this.templateElement.content, true);
    this.formElement = <HTMLFormElement>importFormElement.firstElementChild!;
    this.formElement.id = 'user-input';

    this.titleInputElement = <HTMLInputElement>this.formElement.querySelector('#title')! 
    this.descriptionInputElement = <HTMLInputElement>this.formElement.querySelector('#description');
    this.peopleInputElement = <HTMLInputElement>this.formElement.querySelector('#people');
    
    this.configure();
    this.render();

  } 

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement?.value);
  }

  private configure() {
    this.formElement.addEventListener('submit', this.submitHandler);
  }

  private render() {
    this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
  }
}

const projectInput = new ProjectInput();