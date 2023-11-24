//  import 'reflect-metadata';

const Logger = (logString: string) => {
    return function(constructor: Function) {
        console.log(logString)
        console.log(constructor);
    }
}

const WithTemplate = (template: string, hookId: string) => {
    return function<T extends { new(...args: any[] ): { name: string} }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const hookElement  = document.querySelector(`#${hookId}`);
                if (!hookElement) return;
                hookElement.innerHTML = template;
                hookElement.querySelector('h1')!.textContent = this.name;
            }
        }
    }
}

const Autobind = (_target: any, _methodName: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    const  adjDescriptor  = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor ;
}

@WithTemplate('<h1>My first decorator factory function</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('logging the person...')
    }
}

class Printer {
    message = 'This works';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const printer = new Printer()
const button = document.querySelector('button');

button?.addEventListener('click', printer.showMessage)
// button?.addEventListener('click', printer.showMessage.bind(printer)) //using the bind(printer) it binds this explicitly to the printer class

interface ValidatorConfig {
    [property: string] : {
        [validatorProp: string]: string[];
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function Validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) return true;

    let isValid = true;

    for (const prop in objValidatorConfig) {
        for (const validator of  objValidatorConfig[prop]) {
            switch (validator) {
                case 'required' :
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break
            }
        }
    }
    return isValid;
}

class Course {
    @Required title: string;

    @PositiveNumber price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const form = document.querySelector('form')!;

form?.addEventListener('submit', function(event) {
    event.preventDefault();

    const titleElem = this.querySelector('#title')! as HTMLInputElement;
    const priceElem = this.querySelector('#price')! as HTMLInputElement;
    
    const price = +priceElem?.value;
    const title = titleElem?.value;

    const createdCourse = new Course(title, price);
    if (!Validate(createdCourse)) {
        alert('- Invalid input');
        return;
    }
    console.log(createdCourse, Validate(createdCourse));
    const h1 = document.createElement('h1')! as HTMLHeadElement;

    h1.innerText = `${title} is sold at the price of $${price}`;
    document.body.append(h1)
});
