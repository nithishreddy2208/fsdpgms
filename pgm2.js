function calculate(num1, num2, operation) {
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "subtract") {
        return num1 - num2;
    } else if (operation === "multiply") {
        return num1 * num2;
    } else if (operation === "divide") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: Division by zero!";
        }
    } else {
        return "Invalid operation!";
    }
}

let number1 = 12;
let number2 = 4;
let operation = "add"; 

let result = calculate(number1, number2, operation);
console.log(`Result: ${result}`);