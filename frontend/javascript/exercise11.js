// let n=5;
// let fac=1;
// for(let i=n;i>0;i--){
//     fac=fac*i;
// }
// console.log(fac);


// // 0 + 1 + 2 + 3 + 4
// const array = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// console.log(sumWithInitial);


// let numbers=[];
// for(i =1 ; i<=5;i++){
//     numbers[i]=i
// }
// factorial = (a,b) =>{
//     return a*b;
// };
// let f=numbers.reduce(factorial)
// console.log(f)


let a = 5;
function fact(number) {
    let arr = Array.from(Array(number + 1).keys());
    console.log(arr);
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b;
    });
    return c;
}
console.log(fact(a));