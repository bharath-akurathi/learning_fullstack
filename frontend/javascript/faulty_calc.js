function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mul(a, b) {
    return a * b;
}

function expo(a, b) {
    return a ** b;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (input1) => {
    rl.question("Enter second number: ", (input2) => {

        const a = Number(input1);
        const b = Number(input2);

        if (Math.random() < 0.1) {
            console.log("Addition:", sub(a, b));
            console.log("Multiplication:", sum(a, b));
            console.log("Subtraction:", div(a, b));
            console.log("Division:", expo(a, b));
        } 
        else {
            console.log("Addition:", sum(a, b));
            console.log("Multiplication:", mul(a, b));
            console.log("Subtraction:", sub(a, b));
            console.log("Division:", div(a, b));
        }

        rl.close();
    });
});
