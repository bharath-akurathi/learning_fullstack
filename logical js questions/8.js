// Async Array Mapping: Write an asynchronous function that takes an 
// array of numbers and returns a new array of Promises where each 
// number is multiplied by 2 after a delay of 500 milliseconds.

async function arrMapping(arr) {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); 
    const promises = arr.map(async (num) => {
        await delay(500);
        return num * 2;
    });
    return Promise.all(promises);
}

arrMapping([1, 2, 3, 4, 5, 6]).then((res) => {
    console.log(res);
})
