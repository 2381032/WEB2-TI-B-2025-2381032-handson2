"use strict";
/**
 *  TypeScript Tuple
 *
 * Tuple adalah array dengan:
 * - jumlah element yang tetap
 * - Tipe data yang sudah ditentukan untuk setiap posisi
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Deklarasi Tuple
let person = ["John Doe", 25];
// Tuple untuk koordinat
let coordinate = [10.5, 20.1];
// Tuple dengan optional element
let optionalTuple = ["Hello"];
optionalTuple = ["Hello", 42];
// Destructuring Tuple
let [name, age] = person;
console.log("Name: ", name);
console.log("Age: ", age);
// Tuple dalam array
let employee = [
    ["john", 25],
    ["jane", 30],
    ["bob", 28],
];
employee.forEach(([name, age]) => {
    console.log(`${name} is ${age} years old`);
});
