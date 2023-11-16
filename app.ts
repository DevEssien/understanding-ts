//TUPLE TYPE

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Essien',
    age: 30,
    hobbies: [ 'sports', 'fishing', 'gaming'],
    role: [2, 'author']
}

person.role.push('admin'); //still pushes even role array length was strictly fixed. this is an exception for push
// person.role[1] = 10 //cannot assign number to string
// person.role = [2, 'artist', 'user'] //also cannot reassign to another array structure

let favActivities: string[];
favActivities = ['gaming'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}