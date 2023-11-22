interface AddFn {
    (a: number, b: number): number //anonymous function
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2
}
console.log(add(3,5));

interface Sex {
    gender?: string; //gender is optional. optional === '?'
}

interface Greetable extends Sex{
    name?: string;
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    gender = 'male';
    age = 20;
    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }
    greet(this: Person, phrase: string): void {
        if (this.name) {
            console.log(phrase, ' ', this.name)
        } else {
            console.log('Hi!')
        }
    }
}

const person = new Person('emrice');
person.greet('Hi, my name is')