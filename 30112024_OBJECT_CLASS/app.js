
// const person = ({firstName, lastName, age, job})=>{
//         console.log(`name => ${firstName} ${lastName}`)
//         console.log(`age => ${age}`)
//         console.log(`job => ${job}`)
//     }
//     const personOne = {
//         firstName: 'Jubayer',
//         lastName: 'Ahmed',
//         age: 25,
//         job: 'full stack development',
//     }

//     person(personOne)



///////////////////////////////////////////////
// const person ={
//     name: 'Jubayer',
//     age: 25,
// }
// const {name, age} = person
// console.log(name)
// console.log(age)


//////////////////////////////////

const numbers = [1,2,3]
const[one, two, three] = numbers
console.log(two)
console.log(three)










// class Person{
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job
//     }

// }


// const personOne = new Person('Jubayer', 25, 'dev')
// console.log(personOne)


///Static function
// class Person{
//     static func(){
//         console.log(`Heyyy`)    
//     }
// }
// Person.func()


// class User{
//     //let, const use kora jabe name
//     static userCount = 1
//     static increment() {
//         User.userCount++
//     }
// }

// //User.increment()
// User.increment()
// User.increment()
// console.log(User.userCount)


////
// class User{
//     static userCount = 1
//     constructor(userName){
//         this.userName = userName
//         User.userCount++
//     }
//     Hey(){
//           console.log(`my name is ${this.userName}`)
//         }
//     }

//     const user1 = new User('Jubayer')
//     // user1.Hey()
//     console.log(user1.userName)
//     console.log(User.userCount)
//     user1.Hey()


// class Animal{
//     eat(){
//         console.log(`this ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`)
//     }
// }

// class Cow extends Animal{
//     name = 'cow'
// }

// class Goat extends Animal{
//     name = 'goat'
// }

// const cow = new Cow()
// const goat = new Goat()
// cow.eat()
// cow.sleep()
// goat.eat()




///////////////////////////////////////////////
// class Animal{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

// class Cow extends Animal {
//     constructor(name, age, runspeed){
//         super(name, age)
//         this.runspeed = runspeed
//     }
// }

// class Fish extends Animal {
//     constructor(name, age, swimspeed){
//         super(name, age)
//         this.swimspeed = swimspeed
//     }
// }

// const cow = new Cow('cow', 5, 30)
// console.log(cow.name)
// console.log(cow.age)
// console.log(cow.runspeed)

// const fish = new Fish('Fish', 6, 70)
// console.log(fish.name)
// console.log(fish.age)
// console.log(fish.swimspeed)













