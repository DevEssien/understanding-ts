const add = (...numbers: number[]) => {
    return numbers.reduce((total, currentVal) => {
        return total + currentVal;
    }, 0);
}

console.log(add(1,2,3,4,5,6));