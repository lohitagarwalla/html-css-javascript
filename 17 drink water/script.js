const glass2l = document.querySelector('.glass2l')
const glass1 = document.querySelector('.glass1')
const remaining = document.querySelector('.glass1 p')
console.log(remaining)
const glass2 = document.querySelector('.glass2')
const percent = document.querySelector('.glass2 p')
console.log(percent)

const buttons = document.querySelectorAll('.glass250ml')

var drank = -1

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        drank = idx
        buttons.forEach((btn, index) => {
            if(index <= idx)  btn.classList.add('isfull')
            else  btn.classList.remove('isfull')
        })
        updateGlass()
        
    console.log(glass2l)
    })
})

function updateGlass () {

    glass2l.classList.remove('isfull')
    glass2l.classList.remove('isempty')

    drank++

    var down = 400 / 8 * drank
    var up = 400 - down

    glass1.style.height = `${up}px`
    glass2.style.height = `${down}px`
    console.log(up)
    console.log(down)
    if(down == 400) {
        glass2l.classList.add('isfull')
    }
    else {
        glass2l.classList.remove('isfull')
    }
    var rem = 2 * up / 400
    var per = down / 4 
    console.log(rem, per)

    percent.innerHTML = `${per}%`
    remaining.innerHTML = `${rem}L remaining`
}


// document.getElementsByClassName('glass2').style.height= 300px