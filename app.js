//ENUM TYPE
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
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
var person = {
    name: 'Essien',
    age: 30,
    hobbies: ['sports', 'fishing', 'gaming'],
    role: Role.ADMIN
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN)
    console.log('is admin');
