//Bai 1
const ham = (a: number[]) => (
    a.reduce((pre, cur) => {
        return pre + cur;
    }, 0)
)

const a = [1, 2, 3]

console.log("Bài 1: " + ham(a))

//Bai 2
interface Person {
    name: string,
    age: number,
    email: string
}

const p1: Person = {
    name: "Name1",
    age: 12,
    email: "abc@gmail.com"
}

console.log("Bài 2: ")
console.log(p1)

//Bai 3
const hamG = <T>(a: T[]) => {
    return a.at(0);
}

const arr = ["a", "b", "c"]
const arr1 = [1, 2, 3]

console.log("Bài 3: " + hamG(arr1))

//Bai 4
enum Color {
    RED = "RED",
    GREEN = "GREEN",
    BLUE = "BLUE",
}

const hamE = (a: Color): Color => {
    return a;
}

console.log("Bài 4: " + hamE(Color.RED))

//Bai 5
class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public area(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 12)
console.log("Bài 5: " + rectangle.area())

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

const url = 'http://localhost:3000/locations';

async function getData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        throw error;
    }
}
console.log("Bài 7:")
getData(url)

//Bài 8
import * as utils from "./checkNumber";

console.log("Bài 8: ")
console.log(utils.giaiThua(3))
console.log(utils.soNguyenTo(11))

//Bài 9
type Product = {
    id: number,
    name: string,
    price: number,
    quantity: number,
};

// 1.
const pro1: Product = {id: 1, name: "Pro1", price: 150, quantity: 3}
const pro2: Product = {id: 2, name: "Pro2", price: 12, quantity: 6}
const pro3: Product = {id: 3, name: "Pro3", price: 122, quantity: 4}
const pro4: Product = {id: 4, name: "Pro4", price: 100, quantity: 8}
const pro5: Product = {id: 5, name: "Pro5", price: 156, quantity: 1}

const productsList: Product[] = [pro1, pro2, pro3, pro4, pro5]
console.log("Bài 9.1: ")
console.log(productsList)

// 2.
const total = productsList.reduce((pre, cur) => {
    return pre + cur.price*cur.quantity
}, 0)
console.log("Bài 9.2: ")
console.log(total)

// 3.
const result = productsList.filter((product: Product) => {
    return product.price > 100
})

console.log("Bài 9.3: ")
console.log(result)

// 4.
const res = productsList.map((product: Product) => {
    return `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`
})
console.log("Bài 9.4: ")
console.log(res)

// 5.
const res1 = productsList.reduce((pre, cur) => {
    if (cur.price < 100) return pre + cur.quantity;
    return pre;
}, 0)

console.log("Bài 9.5: ")
console.log(res1)

//6.
const getDiscountedProducts = (products: Product[], discount: number) => {
    return products.map((product: Product) => {
        return `Sản phẩm ${product.name} có giá sau khi giảm ${discount}% còn ${product.price - product.price*discount/100} đồng.`
    })
}

console.log("Bài 9.6: ")
console.log(getDiscountedProducts(productsList, 20))

