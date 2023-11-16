const person = {
    name: 'Essien',
    age: 30,
    hobbies: [ 'sports', 'fishing', 'gaming']
}

let favActivities: string[];
favActivities = ['gaming'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}