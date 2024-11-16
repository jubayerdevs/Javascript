// const stack = [
//     {
//         name: 'full stack',
//         prop: 'html, css, tailwind',
//         language: 'javascript'
//     },
//     {
//         name: 'full stack',
//         prop: 'html, css, tailwind',
//         language: 'nodejs'
//     }
// ]

// const userStack = stack.filter(stck=> stck.language === 'javascript')
// console.log(userStack)


// const numbers = [1, 2, 3, 4, 5]
// //const result = numbers.map(num => num + 5)
// const resultOne = numbers
// .map(num => num + 5)
// .map(num => num * 3)
// .filter(num => num >= 10)
// console.log(resultOne)

let text = "";
let i = 0;
while(i < 10){
    text += "Number is "+i;
    i++;

    console.log(i)
}

const numbers = [1, 2, 3, 4, 5]
for(let index = 0; index < numbers.length; index++){
    console.log(index);
}

