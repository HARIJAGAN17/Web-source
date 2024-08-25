"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleTestClass = void 0;
var moduleTestClass = /** @class */ (function () {
    function moduleTestClass(Name, age) {
        var _this = this;
        this.Name = Name;
        this.age = age;
        this.information = function () {
            console.log("Information method: Name:" + _this.Name + " age:" + _this.age);
        };
        this.personalInfo = function () {
            _this.information();
        };
    }
    return moduleTestClass;
}());
exports.moduleTestClass = moduleTestClass;
