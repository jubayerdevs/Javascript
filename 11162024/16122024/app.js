
//Using async
// const func = async () => {
//     return `heyy`
// }
// console.log(func())

//Using Promise
// const func1 = () => {
//     return Promise.resolve (`heyy`)
// }
// console.log(func1())


//API
// const randomUser = async () => {
//     let fetchh = await fetch(`http://randomuser.me/api/`)
//     let rawData = await fetchh.json() 
//     console.log(rawData)
//     console.log(`my title is ${rawData.results[0].name.title} and my first name is ${rawData.results[0].name.first} my last name is ${rawData.results[0].name.last} and gender is ${rawData.results[0].gender}`)

// }
// randomUser()


/// Random Output -1
// const randomQuote = [
//     'Quality', 'Believe', 'Life', 'With', 'Thoughts'
// ];

// const quote = document.getElementById('quote')
// const author = document.getElementById('author')
// const btn = document.getElementById('button')

// let autoQuote = () => {
//     const quoteIndex = Math.floor(Math.random() * randomQuote.length)
//     quote.textContent = randomQuote[quoteIndex]
// }
// btn.addEventListener('click', autoQuote)



/// Random Output -2
// const randomQuote = [
//     {
//         quote: 'Quality', 
//         author: 'Believe',
//     },
//     {
//         quote: 'Quality 1', 
//         author: 'Believe 1',
//     },
//     {
//         quote: 'Quality 2', 
//         author: 'Believe 2',
//     },
//     {
//         quote: 'Quality 3', 
//         author: 'Believe 3',
//     }
// ];

// const quote = document.getElementById('quote')
// const author = document.getElementById('author')
// const btn = document.getElementById('button')

// let autoQuote = () => {
//     const quoteIndex = Math.floor(Math.random() * randomQuote.length)
//     quote.textContent = randomQuote[quoteIndex].quote
//     author.textContent = randomQuote[quoteIndex].author
// }
// btn.addEventListener('click', autoQuote)



///Random Output -3
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('button')

const urlApi = 'https://api.api-ninjas.com/v1/quotes?category=birthday'
const keyApi = '16912RTUm0UfAmSOIYzLTQ==uxBjiCYua8DS9631'

const getQuote = () =>{
    fetch(urlApi, {
        headers: {
            'x-Api-key' : keyApi,
        }
    })
    .then(data => data.json())
    .then(item => {
        quote.textContent = item[0].quote
        author.textContent = item[0].author
    })
    .catch(error => {
        console.error(`fetching error`, error)
    })
}
btn.addEventListener('click', getQuote)