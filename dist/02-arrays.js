"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Cara 1: Tipe [] Square brackets
let numbers = [1, 2, 3, 4, 5];
let names = ["Jeremy", "Yecoef", "Yuda"];
//Cara 2: Array[]
let scores = [1, 2, 3, 4];
let fruits = ["Apple", "Orange", "Banana"];
//Array dengan multiple types (union type)
let mixed = [1, "Two", 3, "Four"];
//Array Methods
numbers.push(6); //Menambah Element
names.pop(); // Menghapus element terakhir
//iterasi array
numbers.forEach((num) => {
    console.log("Number: ", num);
});
//Array mapping
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers: ", doubledNumbers);
