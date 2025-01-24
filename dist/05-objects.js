"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object type annotation
let user = {
    name: "John",
    age: 30,
    email: "john@example.com",
};
// Implementasi interface
let employee = {
    id: 1,
    name: "Jane Doe",
    department: "IT",
    salary: 5000,
    contact: "phone-number",
};
let company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "Tech City",
        country: " Techland",
    },
    employees: [employee],
};
console.log("User : ", user);
console.log("Employee : ", employee);
console.log("Company : ", company);
