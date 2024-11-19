const bekti = {
    name: 'shanto',
    age: 25,
    country: 'bangladesh',
    job: 'dev'
}


// for (let i in bekti){
//     let result = i.charAt(0).toUpperCase() + i.slice(1)
//     console.log(result)
//     console.log(`${result} -> ${bekti[i]}`) 
// }


// let car = ['bmw', 'volvo', 'toyota', '']
// car.forEach(carName => console.log(carName)
// )


// const myName = 'shanto'
// for(let name of myname){
//     console.log(`my char ${name}`)
// }

// for(Let i = 0; i< myName.length; i++){
//     console.log(myName[i])
// }

// const country = new Map([
//     ['Bn', 'Bangladesh'],
//     ['Th', `Thailand`],
//     ['Np', 'Nepal']
// ])


// country.set('PK', 'Pakistan')
// for(let key of country){
//     console.log(key)
// }

// for(let [key, value] of country){
//     console.log(`${key} for ${value}`)
// }

for(let[key, value] of Object.entries(bekti)){
    console.log(key + ' '+ value )
}

// const arr = [2, 3, 4, 5]
// const reduce = arr.reduce(
//     (accu, curntvalue) => accu + curntvalue, 0,
// )
// console.log(reduce)

