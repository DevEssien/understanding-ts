const Logger = (target: Function) => {
    console.log(target)
}

@Logger
class Person {
    name = 'Max';

    constructor() {
        console.log('logging the person...')
    }
}

const person = new Person()