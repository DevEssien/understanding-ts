type Combinable = number | string;

const combine = (n1: Combinable, n2: Combinable) => {
  if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
  else return n1.toString() + n2.toString();
};

const combineNum = combine(2, 4);
const combineStr = combine("As", "Nort");
console.log(combineNum);
console.log(combineStr);



//ENUM TYPE

enum Role { ADMIN, READ_ONLY, AUTHOR }
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Essien',
//     age: 30,
//     hobbies: [ 'sports', 'fishing', 'gaming'],
//     role: [2, 'author']
// }

const person = {
    name: 'Essien',
    age: 30,
    hobbies: [ 'sports', 'fishing', 'gaming'],
    role: Role.ADMIN
}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) console.log('is admin');