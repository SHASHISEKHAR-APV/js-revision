function calculate(inputs) {
    let result = parseFloat(inputs[0]); // Start with the first number

    // Loop through the array starting from the first operator (index 1)
    for (let i = 1; i < inputs.length; i += 2) {
        let operator = inputs[i];
        let nextValue = parseFloat(inputs[i + 1]);

        if (operator === '+') {
            result += nextValue;
        } else if (operator === '-') {
            result -= nextValue;
        } else if (operator === '*') {
            result *= nextValue;
        } else if (operator === '/') {
            if (nextValue !== 0) {
                result /= nextValue;
            } else {
                return "Error: Division by zero";
            }
        }
    }
    return result;
}

// Example usage: Representing "10 + 5 * 2"
const myInputs = ["10", "+", "5", "*", "2"];
console.log("Result:", calculate(myInputs)); // Output: 30
