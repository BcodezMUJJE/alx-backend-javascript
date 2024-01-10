"use strict";
exports.__esModule = true;
exports.StudentClass = exports.printTeacher = void 0;
function printTeacher(firstName, lastName) {
    return firstName[0] + ". " + lastName;
}
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this._firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
