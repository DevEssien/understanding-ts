var combine = function (n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number")
        return n1 + n2;
    else
        return n1.toString() + n2.toString();
};
var combineNum = combine(2, 4);
var combineStr = combine("As", "Nort");
console.log(combineNum);
console.log(combineStr);
