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

