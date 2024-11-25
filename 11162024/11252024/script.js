const generatePassword = (length, lowerCase, upperCase, symbols, numbers) => {
    const lowerCaseChars = 'abcdefghijklmonpqrstuvwxyz'
    const upperCaseChars = 'ABCDEFGHIJKLMONPQRSTUVWXYZ'
    const numberChars = '0123456789'
    const symbolsChars = '!@#$%-=+'

    let chars=''
    let password = ''

    chars += lowerCase ? lowerCaseChars : ''
    chars += upperCase ? upperCaseChars : ''
    chars += symbols ? symbolsChars : ''
    chars += numbers ? numberChars : ''

    if (length <= 0 && chars.length === 0)
        window.alert('at least 1 character needed')


    for(let i =0; i< length; i++){
        const randomPassword = Math.floor(Math.random() * chars.length)
        password += chars[randomPassword]

    }
    return password
}

const passLength = 10
const lowerCase = true
const upperCase = true
const numbers = true
const symbols = true


const password = generatePassword(passLength, lowerCase, upperCase, numbers, symbols)
console.log(`password is ==> ${password}`)

// ternary operator

// a=a+b
// a += b
//a =+ b