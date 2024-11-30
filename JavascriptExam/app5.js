// const sum () =>{
//     let multiply;
//     let valueOne = 4;
//     let valueTwo = 2;    
// }
// let multiply;
// const sum = (() => {
    
//     let valueOne = 4;
//     let valueTwo = 2;
//     multiply =+ valueOne * valueTwo;
//     return() =>{
//         multiply =+ multiply;
//     }
     
    //return multiply; 
// })();

// console.log(sum); 
// console.log(sum); 
// console.log(sum); 


const sum =() => {
    let valueOne =4;
    let valueTwo = 2;
    let multiply = valueOne * valueTwo
 return () => {
    multiply += multiply
    console.log(multiply)
 }

}

const result = sum()
result()
result()


