var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var button = document.querySelector('button');
var add = function (num1, num2) {
    return num1 + num2;
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
