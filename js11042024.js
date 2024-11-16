// class User{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     sayhey(){
//         console.log(`hey my name is ${this.name} and age is ${this.age}`)
//     }
// }

// const result = new User('Shanto', 25)
// //result.sayhey();
// result.display();


class Animal{
    eat(){
        console.log(`this ${this.name} is eating`);
        console.log('hello '+this.name);
    }

    sleep(){
        console.log(`this ${this.name} is sleeping`)
    }
}

class Cow extends Animal{
    name = 'cow'
}

class Goat extends Animal{
    name = 'goat'
}

const cow = new Cow()
cow.eat();
cow.sleep();

const goat = new Goat();
goat.eat();
