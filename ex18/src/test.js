// (async () => {
//     let a = await fetch("https://jsonplaceholder.typicode.com/posts")
//     console.log(a)
//     if (!a.ok) {
//         console.error('Failed to generate data')
//         return
//     }
// })();
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
}

getData().then((value) => {
    console.log(value)
})


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json))