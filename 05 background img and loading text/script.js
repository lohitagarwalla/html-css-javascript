const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let blurint = setInterval(blurry, 20);
let blurval = 30.5
let opacityval = blurval / 30.5
let percentval = 0;

function blurry() {
    blurval -= 0.5
    opacityval = blurval / 30.5
    percentval = parseInt(100/30.5 * blurval)
    if(blurval === 0) {
        clearInterval(blurint)
    }

    bg.style.filter = `blur(${blurval}px)`
    loadText.style.opacity = opacityval
    loadText.innerHTML = `${percentval}%`
}