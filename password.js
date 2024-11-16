function generatePass(lenghth, lowerCase, upperCase, numbers, symbols){
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbersChars = '0123456789'
    const symbolsChars = '!@#$%^&*()'

    let allowchars = ''
    let password = ''

allowchars += lowerCase ? lowerCaseChars : "";
    allowchars += upperCase ? upperCaseChars : "";
    allowchars += numbers ? numbersChars : "";
    allowchars += symbols ? symbolsChars : "";

    if(lenghth <= 0 && allowchars.length == 0){
        return 'must be use 1 characters'
    }


    for(let i=0; i<lenghth; i++){
        const randomNumber = Math.floor( Math.random()* allowchars.length)
        password += allowchars[randomNumber]
    }
    return password

}


const passwordLength = 10
const lowerCase = true
const upperCase = true
const numbers = true
const symbols = true

const password = generatePass(passwordLength, lowerCase, upperCase, numbers, symbols)
console.log('password -> ${pasword}')
console.log(password)
