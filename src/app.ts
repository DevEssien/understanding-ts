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

@WithTemplate('<h1>My first decorator factory function</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('logging the person...')
    }
}

const person = new Person()