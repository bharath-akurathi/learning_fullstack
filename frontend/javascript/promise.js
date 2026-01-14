function getData(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataid)
            resolve("Data fetched for " + dataid);
        }, 2000);
    });
}

// promise chaining

// method1

// let prom1 = getData(123);
// prom1.then((value) => {
//     console.log(value);
//     let prom2 = getData(456);
//     prom2.then((value) => {
//         console.log(value);
//     }).catch((err) => {
//         console.log("Error: ", err);
//     });
// }).catch((err) => {
//     console.log("Error: ", err);
// });


// method 2, same as method 1 --> only syntactically different

getData(1)
    .then((res) => {
        console.log(res);
        return getData(2);
    })
    .then((res) => {
        console.log(res);
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    })





//example for simple promise

// Creating a Promise that resolves after 2 seconds

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("printing after 2 seconds");
//         // resolve("resolved");
//         reject("rejected");
//         let div = document.createElement("div");
//         div.innerHTML = `<div>this is added after 2 seconds</div>`;
//         div.className = "container"
//         div.style.backgroundColor = "lightblue";
//         document.body.append(div);
//     }, 2000);
// });

// promise1.then((value) => {
//     alert(value);
// }).catch((err) => {
//     console.log(err);
//     alert(err)
// }).finally(console.log("final block"));



// // the above is same as 

// promise1.then(alert).catch((err)=>{
//     console.log(err)
//     alert(err)
// })





// this is script to load another script using promises

// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`Script load error for ${src}`));
//         document.head.append(script);
//     });
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js")
//     .then((script) => {
//         console.log("Script loaded:", script.src);
//         alert("Lodash loaded successfully!");
//         let div = document.createElement("div");
//         div.innerHTML = "<div>this is added</div>";
//         div.className="container"
//         div.style.backgroundColor = "lightblue";
//         document.body.append(div);
//     })
//     .catch((err) => {
//         console.error(err);
//     });



// // racing promises

// console.log('This is Promises');

// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done 1")
//             resolve("Harry 1")
//         }, 1000);
//     }
// })

// let prom2 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you 2")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done 2")
//             resolve("Harry 2")
//         }, 1000);
//     }
// })
// // let p3 = Promise.all([prom1, prom2])
// // let p3 = Promise.any([prom1, prom2])
// // let p3 = Promise.race([prom1, prom2])
// // let p3 = Promise.resolve("This is resolved value")
// // let p3 = Promise.reject("This is rejected value")
// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })