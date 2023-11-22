// const list: Array<string> = []

// const promise: Promise<string>  = new Promise((resolve, reject) => {
//     const r = 'red'
//     if (r === 'red') resolve('red');
// });

// promise.then(data => {
//     data.toUpperCase()
// })

const mergeObject = <T extends object, U extends object>( obj1: T, obj2: U ) => {
    return { ...obj1, ...obj2 }
}
const obj = mergeObject({a: 2, b: 3}, {c: 3, d: 4});
console.log(obj.c)