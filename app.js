//FUNCTIONS AND CALLBACK
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(2, 4, function (result) { return console.log(result); });
