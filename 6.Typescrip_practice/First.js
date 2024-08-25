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
doMessage(222);
