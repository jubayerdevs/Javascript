// const walkDog = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`walk the dog`)
//         }, 3000)
//     })
// }

// const trash = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`take out the trash`)
//         }, 3000)
//     })
// }
// walkDog()
// .then(value => {
//     console.log(value)
//     return trash()
// })
// .then(value => {
//     console.log(value)
// })



// const walkDog = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = true
//             if(dogwalked){
//                 resolve(`walk the dog`)
//             }else{
//                 reject(`didn't walk the dog`)
//             }
//         }, 3000)
//     })
// }

// const trash = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const trashh = true
//             if(trashh){
//                 resolve(`take out the trash`)
//             }else{
//                 reject(`didn't take out the trash`)
//             }    
//         }, 3000)
//     })
// }

// walkDog()
// .then(value => {
//     console.log(value)
//     return trash()
// })
// .then(value => {
//     console.log(value)
// })
// .catch(error => console.log(`Log Error => ${error}`))


// let coffee = new Promise((resolve, reject) => {
//     //false /true
//     if(false){
//         return resolve()
//     }
//     else{
//         return reject()
//     }
// })
// coffee.then(() => {
//     console.log(`resolved it`)
// })
// .catch(() => {
//     console.log(`rejected it`)
// })




// let math = new Promise((resolve, reject) => {
//     let number = Math.floor(Math.random() * 10)
//     console.log(number)
//     if(number < 5){
//         return resolve()
//     }
//     else{
//         return reject()
//     }
// })

// math.then(() => {
//     console.log(`below`)
// }).catch(() => {
//     console.log(`above`)
// })


// let stepOne = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(`step one completed`)
//     }, 3000)
// })
// let stepTwo = new Promise(resolve =>{
//     setTimeout(() => {
//         resolve(`step two completed`)
//     }, 6000)
// })

// // stepOne.then(value => console.log(value))
// // stepTwo.then(value => console.log(value))
// Promise.all([stepOne, stepTwo]).then(value =>
// {
//     return console.log(value);    
// })

// Promise.race([stepOne, stepTwo]).then(value =>
// {
//     return console.log(value);    
// })


const randomUser = () =>{
    fetch(`http://randomuser.me/api/`)
    .then(rawData => {
        return rawData.json()
    })
    .then(data => console.log(data))
    .catch(() => {
        console.log(`no data`)
    })
}

randomUser()











// new Promise((resolveOuter) => {
//     resolveOuter(
//       new Promise((resolveInner) => {
//         setTimeout(resolveInner, 1000);
//       }),
//     );
//   });


//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });
  
//   myPromise
//     .then(handleFulfilledA, handleRejectedA)
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC);