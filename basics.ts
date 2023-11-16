function add(n1: number, n2: number) {
    return n1 + n2;
  }
  
  const num1 = 5;
  const num2 = 2.3;
  
  const result = add(num1, num2);
  console.log(result);
  
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