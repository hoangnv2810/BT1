"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//Bai 1
var ham = function (a) { return (a.reduce(function (pre, cur) {
    return pre + cur;
}, 0)); };
var a = [1, 2, 3];
console.log("Bài 1: " + ham(a));
var p1 = {
    name: "Name1",
    age: 12,
    email: "abc@gmail.com"
};
console.log("Bài 2: ");
console.log(p1);
//Bai 3
var hamG = function (a) {
    return a.at(0);
};
var arr = ["a", "b", "c"];
var arr1 = [1, 2, 3];
console.log("Bài 3: " + hamG(arr1));
//Bai 4
var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["GREEN"] = "GREEN";
    Color["BLUE"] = "BLUE";
})(Color || (Color = {}));
var hamE = function (a) {
    return a;
};
console.log("Bài 4: " + hamE(Color.RED));
//Bai 5
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 12);
console.log("Bài 5: " + rectangle.area());
// Bài 6
// function logMethod(target: ExampleClass, key: string, descriptor: PropertyDescriptor): any {
//     console.log("--------------------")
//     console.log(descriptor)
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Calling method ${key} with arguments: ${JSON.stringify(args)}`);
//         return originalMethod.apply(this, args);
//     };
//     return descriptor;
// }
// class ExampleClass {
//     // @ts-ignore
//     @logMethod
//     methodEx(a: string, b: number): string {
//         return `Result: ${a} - ${b}`;
//     }
// }
// const e = new ExampleClass()
// console.log(`Bài 6: ${e.methodEx("string", 1)}`)
//Bài 7
var url = 'http://localhost:3000/locations';
function getData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
console.log("Bài 7:");
getData(url);
//Bài 8
var utils = require("./checkNumber");
console.log("Bài 8: ");
console.log(utils.giaiThua(3));
console.log(utils.soNguyenTo(11));
// 1.
var pro1 = { id: 1, name: "Pro1", price: 150, quantity: 3 };
var pro2 = { id: 2, name: "Pro2", price: 12, quantity: 6 };
var pro3 = { id: 3, name: "Pro3", price: 122, quantity: 4 };
var pro4 = { id: 4, name: "Pro4", price: 100, quantity: 8 };
var pro5 = { id: 5, name: "Pro5", price: 156, quantity: 1 };
var productsList = [pro1, pro2, pro3, pro4, pro5];
console.log("Bài 9.1: ");
console.log(productsList);
// 2.
var total = productsList.reduce(function (pre, cur) {
    return pre + cur.price * cur.quantity;
}, 0);
console.log("Bài 9.2: ");
console.log(total);
// 3.
var result = productsList.filter(function (product) {
    return product.price > 100;
});
console.log("Bài 9.3: ");
console.log(result);
// 4.
var res = productsList.map(function (product) {
    return "S\u1EA3n ph\u1EA9m ".concat(product.name, " c\u00F3 gi\u00E1 ").concat(product.price, " \u0111\u1ED3ng v\u00E0 c\u00F2n ").concat(product.quantity, " s\u1EA3n ph\u1EA9m.");
});
console.log("Bài 9.4: ");
console.log(res);
// 5.
var res1 = productsList.reduce(function (pre, cur) {
    if (cur.price < 100)
        return pre + cur.quantity;
    return pre;
}, 0);
console.log("Bài 9.5: ");
console.log(res1);
//6.
var getDiscountedProducts = function (products, discount) {
    return products.map(function (product) {
        return "S\u1EA3n ph\u1EA9m ".concat(product.name, " c\u00F3 gi\u00E1 sau khi gi\u1EA3m ").concat(discount, "% c\u00F2n ").concat(product.price - product.price * discount / 100, " \u0111\u1ED3ng.");
    });
};
console.log("Bài 9.6: ");
console.log(getDiscountedProducts(productsList, 20));
