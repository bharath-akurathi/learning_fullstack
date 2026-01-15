// The Double Trouble: You are tasked with writing a function that 
// doubles each element in an array. However, there's a catch: 
// if the array contains consecutive duplicate elements,
// only double one of them.

function doubleUnique(arr) {
    let result = new Set();
    for (let i = 0; i < arr.length; i++) {
        result.add(arr[i] * 2);
    }
    return result
}

console.log(doubleUnique([1, 2, 2, 3, 4, 4, 4, 5])); // Output: [2, 4, 6, 8, 10]
console.log(doubleUnique([5, 5, 5, 6, 7, 7]));       // Output: [10, 12, 14]
console.log(doubleUnique([1, 2, 3]));             // Output: [2, 4, 6]