"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = map;
// 1
function map(mapper, input) {
    if (arguments.length === 0) {
        return map; //  Returning the function itself (map) when no arguments are provided would not satisfy TypeScript's type system, so casting it to any allows it to pass type checking.
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}
//2
