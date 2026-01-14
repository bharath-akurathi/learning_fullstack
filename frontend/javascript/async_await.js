//async function always returns a promise even if not defined in the async function
// await pauses the execution of its surrounding async function until the promise is settled


// function getData(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(dataid)
//             resolve("Data fetched for " + dataid);
//         }, 2000);
//     });
// }


// (async function main() {
//     console.log("first call")
//     await getData(123);//first this is executed (takes 2s time to execute)
//     console.log("second call")
//     await getData(456);// next after 2s this is executed
// })();






// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData1() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}

// this is an IIFE which is called only once, then and there itself

(async function main() {
    console.log("Loading modules")
    console.log("Do something else")
    console.log("Loading data")
    let data = await getData1() // the next lines wont execute until the promise is resolved
    console.log(data)
    console.log("process data")
    console.log("task 2")
})();

// main()