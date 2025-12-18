let obj = {
    adjective: "Crazy, Amazing, Fire",
    shop_name: "Engine, Foods, Garments",
    another_word: "Bros, Limited, Hub"
}

// Method 1

// console.log(Math.floor(a * 3));

// console.log(obj.adjective.split(", ")[Math.floor(Math.random() * 3)]);
// console.log(obj.shop_name.split(", ")[Math.floor(Math.random() * 3)]);
// console.log(obj.another_word.split(", ")[Math.floor(Math.random() * 3)]);

console.log(`Business Name: ${obj.adjective.split(", ")[Math.floor(Math.random() * 3)]} ${obj.shop_name.split(", ")[Math.floor(Math.random() * 3)]} ${obj.another_word.split(", ")[Math.floor(Math.random() * 3)]}`);

// Method 2

// let bname=""
// for(var key in obj){
//     bname+=(obj[key].split(", ")[Math.floor(Math.random() * 3)]) + " ";
// }
// console.log(`Business Name : ${bname} `);