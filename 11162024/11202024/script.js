// const sum = () => {
//     let count =0
//     return () => {
//         count++
//         console.log(count)
//     }
// }

// const result = sum()
// result()
// result()
// result()
// result()
// result()


//IIFE -> Immediately invoked function expression


// const sum = (x, y) => {
//     console.log(`Add -> ${x + y}`)
// }

// const mult = (x, y) => {
//     console.log(`Mult -> ${x * y}`)
// }
// mult(3, 4)
//sum(3, 4)

// (
//     function (x, y){
//         console.log(`Add -> ${x+y}`)
//     }
// )(3, 4)

//Annonous function
// (
//     (x, y) => {
//         console.log(`Add -> ${x+y}`)
//     }
// )(3, 4)

//Annonous function

// (x, y) => {console.log(`Add -> ${x+y}`)}
// (3, 4)

// (() => {
//     const h3 = document.querySelector('.h3')
//     const h4 = document.querySelector('.h4')
//     h3.computedStyleMap.backgroundColor = 'green'
//     h4.style.color = 'red'
// })private func



const myMethod = (() => {
    const privateVar = `this is a private variable`
    const privateFunc = () => {
        console.log(privateVar)
        console.log(`this is private function`)
    }
    return{
            publicVar: 'this is a public value',
            publicMethod: () => {
                privateFunc()
                console.log(privateVar)
                return `this is a public method`
            }
    }
}) ()

console.log(myMethod.publicVar)
console.log(myMethod.publicMethod())

// console.log(myMethod.privateFunc)
// console.log(myMethod.privateVar)

// const makingFunc = () => {
//     const name ='shantoyrere'
//     const displayName = () => {
//         console.log(name) //''shantoyrere
//     }
//     return displayName
// }

// const retult = makingFunc()
// retult()