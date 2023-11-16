const combine = (n1: number | string, n2: number | string) => {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
  else return n1.toString() + n2.toString();
};

const combineNum = combine(2, 4);
const combineStr = combine("As", "Nort");
console.log(combineNum);
console.log(combineStr);
