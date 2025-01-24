/**
 *  TypeScript Tuple
 *
 * Tuple adalah array dengan:
 * - jumlah element yang tetap
 * - Tipe data yang sudah ditentukan untuk setiap posisi
 */

// Deklarasi Tuple
let person: [string, number] = ["John Doe", 25];

// Tuple untuk koordinat
let coordinate: [number, number] = [10.5, 20.1];

// Tuple dengan optional element
let optionalTuple: [string, number?] = ["Hello"];
optionalTuple = ["Hello", 42];

// Destructuring Tuple
let [name, age] = person;
console.log("Name: ", name);
console.log("Age: ", age);

// Tuple dalam array
let employee: [string, number][] = [
  ["john", 25],
  ["jane", 30],
  ["bob", 28],
];

employee.forEach(([name, age]) => {
  console.log(`${name} is ${age} years old`);
});

export {};
