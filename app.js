var person = {
    name: 'Essien',
    age: 30,
    hobbies: ['sports', 'fishing', 'gaming']
};
var favActivities;
favActivities = ['gaming'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
