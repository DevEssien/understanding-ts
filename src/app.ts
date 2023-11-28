enum ProjectStatus {
    ACTIVE,
    FINISHED
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

type Listener = (items: Project[]) => void

//PROJECT STATE MANAGEMENT
class ProjectState {
  private listeners: Listener[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState;

  addProject(title: string, description: string, people: number) {
    const generatedId = Math.random().toString();
    const newProject = new Project(
      generatedId,
      title,
      description,
      people,
      ProjectStatus.ACTIVE
    );
    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addListeners(listenerFn: Listener) {
    this.listeners.push(listenerFn);
  }
}

const projectState = ProjectState.getInstance();

//validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validateInput: Validatable) {
  let isValid = true;

  if (validateInput.required) {
    isValid = isValid && validateInput.value.toString().trim().length !== 0;
  }
  if (
    validateInput.minLength != null &&
    typeof validateInput.value === "string"
  ) {
    isValid = isValid && validateInput.value.length >= validateInput.minLength;
  }
  if (
    validateInput.maxLength != null &&
    typeof validateInput.value === "string"
  ) {
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

function AutoBind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  return {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    },
  };
}

//PROJECT  LIST CLASS
class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  sectionElement: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    this.templateElement = <HTMLTemplateElement>(
      document.querySelector("#project-list")!
    );
    this.hostElement = <HTMLDivElement>document.querySelector("#app")!;

    const importSectionElement = document.importNode(
      this.templateElement.content,
      true
    );
    this.sectionElement = <HTMLElement>importSectionElement.firstElementChild!;
    this.sectionElement.id = `${type}-projects`;

    this.assignedProjects = [];

    projectState.addListeners((projects: Project[]) => {
        const relevantProjects = projects.filter(project => {
            if (this.type === 'active') return project.status === ProjectStatus.ACTIVE;
            return project.status === ProjectStatus.FINISHED
        })
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });

    this.render();
    this.attachContent();
  }

  private renderProjects() {
    const listElem = <HTMLUListElement>(
      document.querySelector(`#${this.type}-projects-list`)!
    );
    listElem.innerHTML = '';
    for (const projectItem of this.assignedProjects) {
      const listItem = document.createElement("li");
      listItem.textContent = projectItem.title;
      listElem.appendChild(listItem);
    }
  }

  private attachContent() {
    const listId = `${this.type}-projects-list`;
    this.sectionElement.querySelector("ul")!.id = listId;
    this.sectionElement.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private render() {
    this.hostElement.insertAdjacentElement("beforeend", this.sectionElement);
  }
}

//PROJECT INPUT CLASS
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

    const importFormElement = document.importNode(
      this.templateElement.content,
      true
    );
    this.formElement = <HTMLFormElement>importFormElement.firstElementChild!;
    this.formElement.id = "user-input";

    this.titleInputElement = <HTMLInputElement>(
      this.formElement.querySelector("#title")!
    );
    this.descriptionInputElement = <HTMLInputElement>(
      this.formElement.querySelector("#description")
    );
    this.peopleInputElement = <HTMLInputElement>(
      this.formElement.querySelector("#people")
    );

    this.configure();
    this.render();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidate: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidate: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidate: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
    };

    if (
      !validate(titleValidate) ||
      !validate(descriptionValidate) ||
      !validate(peopleValidate)
    )
      alert("invalid Inputs");
    else return [enteredTitle, enteredDescription, +enteredPeople];
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      console.log(title, description, people);
      projectState.addProject(title, description, people); //called ProjectState
      this.clearInputs();
    }
  }

  private configure() {
    this.formElement.addEventListener("submit", this.submitHandler);
  }

  private render() {
    this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
  }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
