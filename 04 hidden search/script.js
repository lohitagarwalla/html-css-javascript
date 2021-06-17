// const input = document.getElementsByClassName('field')
const btn = document.getElementById('btn')
const field = document.querySelector('.field')

console.log(btn)

btn.addEventListener('click', () => {
    field.classList.toggle('disabled')
    field.focus()
})