// The Mirror Mirror: Imagine you have a string, and you need to create a 
// new string that is a mirror image of the original. Write a function 
// that appends the reversed version of the original string to itself.

function mirrorString(str) {
    let reversed = str.split('').reverse().join('');
    return str + reversed;
}

// split('') converts the string into an array of characters.
// reverse() reverses the array in place.
// join('') combines the array back into a string. 

console.log(mirrorString("hello"));