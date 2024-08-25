var id = 2;
var company = "HJ";
var isPassed = true;
var ids = [1, 2, 33, 343];
var x = "perro";
var xArr = ["ep", 0, true];
// console.log(ids);
var colors;
(function (colors) {
    colors[colors["red"] = 100] = "red";
    colors[colors["blue"] = 101] = "blue";
    colors[colors["green"] = 102] = "green";
})(colors || (colors = {}));
;
var background = colors.blue;
//console.log(background);
//type assertions
//arrow functions 
var doMessage = function (message) {
    console.log(message);
};
var draw = function (point) {
    console.log(point.x);
    console.log(point.y);
    console.log(point.z);
};
var FinalOutput = function (obj) {
    return obj.CallMessage();
};
// function interfaceFunction (){
//     return 2;
// }
var callFunction = function () {
    return 22;
};
// console.log(FinalOutput({CallMessage:callFunction}));
//Class
var TestClass = /** @class */ (function () {
    function TestClass(name, age) {
        var _this = this;
        this.Name = name;
        this.age = age;
        this.information = function () {
            console.log("Information method: Name:" + _this.Name + " age:" + _this.age);
        };
        this.personalInfo = function () {
            _this.information();
        };
    }
    return TestClass;
}());
var obj1 = new TestClass("hari", 22);
obj1.personalInfo();
