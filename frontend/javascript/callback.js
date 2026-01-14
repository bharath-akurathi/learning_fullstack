// // simple callback example

// function sum(a,b){
//     return a+b
// }

// function calculator(a,b,sumcall){
//     sumcall(a,b)
// }

// // calculator(1,2,sum)


// // calculator(1,2,sum()) // wont work
// // another version is 

// calculator(1,2,(a,b)=>{
//     return a+b
// });

// const callback = (arg) => {
//     console.log(arg)
// }

function loadScript(src, callback) {
    let script = document.createElement('script') // Creates a <script></script> tag in memory It is NOT added to the page yet
    script.src = src // sets the src attribute of the script tag
    script.onload = () => callback(script) // when the script is loaded, this function will be called
    script.onerror = () => callback(new Error(`Script load error for ${src}`)) // optional: handle errors
    document.head.append(script) // appends the script tag to the head of the document, which starts loading the script
    console.log(script) 
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js", (script,error) => {
    if (error) {
        console.error(error)
    } else {
        // // use the loaded script
        // alert('script is loaded')
        // alert(script.src)
    }
});
