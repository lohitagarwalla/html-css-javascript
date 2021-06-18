const jokes = document.querySelectorAll('h2')

var index = 1

const button = document.querySelector('.btn')
// console.log(button)

button.addEventListener('click', () => {
    jokes.forEach((joke, idx) => {
        if(idx == index) joke.classList.contains('dodisable') && joke.classList.remove('dodisable')
        else !joke.classList.contains('dodisable') && joke.classList.add('dodisable')
    })
    index++
    if(index >= jokes.length) index = 0
})