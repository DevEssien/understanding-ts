//FUNCTIONS AND CALLBACK

const addAndHandle = (n1: number, n2: number, cb: (result: number) => void) => {
    const result = n1 + n2;
     cb(result);
}

addAndHandle(2, 4, (result) => console.log(result));