const container = document.getElementsByClassName('container')[0]
const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('mouseenter', () => {
    !container.classList.contains('hover-left') && container.classList.add('hover-left')
    container.classList.contains('hover-right') && container.classList.remove('hover-right')
} )


right.addEventListener('mouseenter', () => {
    !container.classList.contains('hover-right') && container.classList.add('hover-right')
    container.classList.contains('hover-left') && container.classList.remove('hover-left')
} )
