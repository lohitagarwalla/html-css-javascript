const buttoncloses = document.querySelectorAll('.close')
const buttonopens = document.querySelectorAll('.open')
const boxes = document.querySelectorAll('.box')
console.log(buttonopens)

buttoncloses.forEach((close, idx) => {
    close.addEventListener('click', () => {
        boxes[idx].classList.remove('active')
    })
})

buttonopens.forEach((open, idx) => {
    open.addEventListener('click', () => {
        boxes[idx].classList.add('active')
    })
})