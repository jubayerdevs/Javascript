//let count = 2;

// Initiate counter
//let counter = 0;

// Function to increment counter
// function add(x) {
//     count*= count;
// }

// Call add() 3 times
// add(2);
// add(4);

// console.log(add(2));
// add();

// The counter should now be 3


// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12


const sum =() =>{
    let count =2;
    return() => {
        count *= count;
        console.log(count);
    };
};

const result1 = sum();
result1();
result1();