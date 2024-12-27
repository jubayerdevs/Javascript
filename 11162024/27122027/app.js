// let username = "user123";
// let password = "pass123";
// let enteredUsername = "user123";
// let enteredPassword = "pass123";

// if(username === enteredUsername && password === enteredPassword)
//     console.log("Successful")
// else
// {
//     console.log("Wrong Username or Password")
// }


// const doubledAges = [];

// const users = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 3, name: 'Charlie', age: 35 },
//     { id: 4, name: 'Dana', age: 28 },
//   ];


//   for (const v of users) {
//     console.log(`ID: ${v.id}`);
//     console.log(` Name: ${v.name}`);
//     console.log(`Age: ${v.age}`);

//     doubledAges.push(v.age * 2);

//   }

//   console.log(doubledAges);


//Closures
// const User = () =>{
//      let password = 'secret';
//     return {
//       chackPassword: (inputPassword) =>{
//          return inputPassword === password
//        },
//       ChangePassword: (newpassword) =>{
//         password = newpassword
//     console.log("password Updated");
//        },
//       }
//      }
//      const user = User()
//      console.log(user.chackPassword('Hasib'));
//      user.ChangePassword('newpass')


///Call back
// const fetchData = (callback) =>{
//         console.log("Faching Data");
//         setTimeout( () =>{
//            
//          const data = { id: 1, name: "John Doe" };
//     callback(data)
//          
//         },1000)
//      }
//     const handleData = (data) =>{
//     console.log(data);
//     }
//     fetchData(handleData)


    //Promice
    const step1 = () =>{
             return new Promise ((resolve) =>{
                setTimeout( () =>{
                    console.log('First Step Complate');
                    resolve()
                },5000)
             } )
         }
         const step2 = () =>{
            return new Promise ((resolve) =>{
               setTimeout( () =>{
                   console.log('second  Step Complate');
                   resolve()
               },3000)
            } )
        }
        step1()
        .then(() =>{
            step2()
        })
         .then (() =>{
            console.log("All Step are Complated");
           
         })