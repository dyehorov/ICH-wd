"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
exports.reverseString = reverseString;
function capitalize(value) {
    if (value.length === 0) {
        return value;
    }
    return value[0].toUpperCase() + value.slice(1);
}
function reverseString(value) {
    return value.split("").reverse().join("");
}
