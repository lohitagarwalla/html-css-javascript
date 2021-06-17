const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 0

next.addEventListener('click', () => {
    if (currentActive < 3)
        currentActive++

    update()
})

prev.addEventListener('click', () => {
    if (currentActive > 0)
        currentActive--

    update()
})

function update() {
    let i = 0
    for( i=0; i<4; i++) {
        if(currentActive>=i) {
            circles[i].classList.add('active')
        }
        else {
            circles[i].classList.remove('active')
        }
    }

    progress.style.width = currentActive/3 * 100+'%'

    if(currentActive===0){
        prev.disabled = true;
        next.disabled = false;
    }else if(currentActive === 3) {
        prev.disabled = false;
        next.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }
}