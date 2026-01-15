// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num < 0) {
            break;
        }
        sum += num;
    }
    return sum;
}

// Example usage:
console.log(sumUntilNegative([1, 2, 3, -1, 4])); // 6
console.log(sumUntilNegative([5, 10, 15])); // 30
console.log(sumUntilNegative([-5, 10, 15])); // 0