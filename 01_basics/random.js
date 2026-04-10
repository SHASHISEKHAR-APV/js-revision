// Variables
let name = "Arun";
let age = 25;

// Simple function
function greet(name) {
  console.log("Hello " + name);
}
function greet(name) {
  console.log("kya hal hai  " + name);
}
// Object
let person = {
  name: "Arun",
  age: 24
};

// Function using object
function showPerson(p) {
  console.log("Name: " + p.name);
  console.log("Age: " + p.age);
}

// Calling functions
greet(name);
showPerson(person);

// Simple calculation function
function add(a, b) {
  return a + b;
}

console.log("Sum: " + add(2, 3));