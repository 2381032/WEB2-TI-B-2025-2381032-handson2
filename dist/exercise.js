"use strict";
// Menghitung Total Nilai
function calculateTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
// Membalik Array
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
// Mencari Nilai Tertinggi
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
// Filter Angka Genap
function filterEvenNumbers(numbers) {
    const evens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }
    return evens;
}
// Test Cases
const numbers = [10, 20, 30, 40];
console.log("Total Nilai:", calculateTotal(numbers));
const fruits = ["apple", "banana", "cherry"];
console.log("Hasil Reverse:", reverseArray(fruits));
const scores = [45, 72, 88, 34, 99];
console.log("Nilai Tertinggi:", findMax(scores));
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Angka Genap:", filterEvenNumbers(mixedNumbers));
