// var a = 10;
// var a = 12;
// a='country';
// {
//     var block = '30';
//     console.log(a);
//  } 


// function isJoin(){
//     console.log('joining');
// }

// isJoin();

// let numbers = [1, 2,3, 4,5]
// let squarNumbers = numbers.map(function(number)
// {
//     return number * number;
// });

// console.log(squarNumbers);


//call back function
// function hello(callbackFunc){
//     console.log('hey ju');
//     callbackFunc()
// }

// function wait(){
//     console.log('hey ju1');
// }

// function left(){
//     console.log('hey ju2');
// }

// hello(wait)
// hello(left)


// const person ={
//     firstName : 'mahfuz',
//     lastName: 'shanto',
//     set fullName(fullName){
//         this.firstName = fullName
//     },

//     get fullName(){
//         return this.firstName+' '+this.lastName
//     }
// }

// person.fullName = 'pookie khan';
// person.firstName = 'khan khan';
// console.log(person.fullName);
// console.log(person);


// class Animal{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

// class Cow extends Animal{
//     constructor(name, age, runSpeed){
//         super(name,age)
//         this.runSpeed = runSpeed
//     }
// }

// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age)
//         this.swimSpeed = swimSpeed
//     }
// }


// const cow = new Cow('cow', 2, 30)
// const fish = new Fish('fish', 4, 10)

// console.log(cow.name);
// console.log(cow.age);
// console.log(cow.runSpeed);

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}


class Cow extends Animal{
    constructor(name, age, food){
        super(name, age);
        this.food = 'grass';
    }
}

const cow = new Cow('TheCow', 23, 'grass');

console.log(cow.name);
console.log(cow.age);
console.log(cow.food);





