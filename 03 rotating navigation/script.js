const open = document.getElementById('open')
const close = document.getElementById('close')

const container = document.querySelector('.container')
const circle = document.querySelector('.circle')

open.addEventListener('click', () => {
    circle.classList.add('show-nav')
    container.classList.add('show-nav')
})

close.addEventListener('click', () => {
    circle.classList.remove('show-nav')
    container.classList.remove('show-nav')
})