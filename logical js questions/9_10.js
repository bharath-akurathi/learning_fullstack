// The Asynchronous Shopper: Imagine you are building an online 
// shopping application. Write an asynchronous function called 
// placeOrder that simulates placing an order and returns a promise. 
// The promise should resolve with an order confirmation message after 
// a random delay.


// In your coffee shop application, you need to simulate the process of 
// brewing coffee asynchronously. Write an async function named 
// brewCoffee that takes the type of coffee and returns a promise. 
// The promise should resolve with a message indicating that the 
// coffee is ready after a random delay.


async function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("confirmed")
        }, Math.random() * 1000)
    });
}

placeOrder().then((value) => {
    console.log(value)
})
