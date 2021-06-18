const boxes = document.querySelector('.boxes')

window.addEventListener('keydown', (e) => {
    boxes.innerHTML =   
        `<div class="text">
            <small>key</small>
            <p>${e.key == ' ' ? 'space' : e.key}</p>
        </div>
        <div class="text">
            <small>code</small>
            <p>${e.code}</p>
        </div>
        <div class="text">
            <small>keyCode</small>
            <p>${e.keyCode}</p>
        </div>`
})

