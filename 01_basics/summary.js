// Object
const person = {
  name: "John",
  age: 25,
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log(person.name);
console.log(person.greet());

// Function
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

console.log(add(2, 3));
console.log(multiply(2, 3));

// Object with function
const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};

console.log(calculator.add(5, 2));
console.log(calculator.sub(5, 2));