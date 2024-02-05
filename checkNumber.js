"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soNguyenTo = exports.giaiThua = void 0;
var giaiThua = function (n) {
    if (n == 0)
        return 1;
    return n * (0, exports.giaiThua)(n - 1);
};
exports.giaiThua = giaiThua;
var soNguyenTo = function (n) {
    if (n <= 1)
        return false;
    else if (n == 2)
        return true;
    else if (n % 2 == 0)
        return false;
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0)
            return false;
    }
    return true;
};
exports.soNguyenTo = soNguyenTo;
