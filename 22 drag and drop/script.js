const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('drop', dragDrop)  
}

var start = fill
var x = 1

function dragStart(e) {
    this.classList.add('hold')
    setTimeout(() => {
        this.className = 'invisible'
    }, 1)
}

function dragEnd() {
    this.classList.remove('hold')
    this.className = 'fill'
}

function dragEnter() {
    this.classList.add('hovered')
}

function dragLeave() {
    this.classList.remove('hovered')
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    e.preventDefault()
    this.appendChild(fill)
}