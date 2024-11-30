let products = [
    {name: 'shirt', price:20},
    {name: 'Shoes', price:50},
    {name: 'pant', price:40}
]

// const newArr = products.map(multFunc)

// function multFunc(num){
//     return num*10;
// }

// console.log(newArr);


let updatedProducts = products.map(product => {
    return {
        price: product.price * 10
    };
});
const output = products.map(val => val.price *10)
console.log(output);
console.log(updatedProducts);


// let testProduct = [
//     {name:'shirt', price: 10},
//     {name:'pant', price: 20},
//     {name:'shoes', price: 30}
// ]

// let newPrice = testProduct.map(testProduct => {
//     return {
//         testProduct*10;
//     } 
// })