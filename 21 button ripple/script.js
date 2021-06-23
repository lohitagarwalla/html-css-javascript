const buttons = document.getElementsByTagName('button')
// console.log(buttons)
Array.from(buttons).forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        var ofsetx = e.offsetX
        var ofsety = e.offsetY

        const elem = document.createElement('span')
        elem.style.top = ofsety + 'px'
        elem.style.left= ofsetx + 'px'
        elem.style.height = 100 + 'px'
        elem.style.width = 100 + 'px'
        elem.classList.add('circle')
        console.log(elem)

        this.appendChild(elem)

        setTimeout(() => {
            this.removeChild(elem)
        }, 1000)
    })
})