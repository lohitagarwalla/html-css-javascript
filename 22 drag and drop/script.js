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
    console.log('dragstart')
    this.classList.add('hold')
    setTimeout(() => {
        this.className = 'invisible'
    }, 0) 
    x = 2
}

function dragEnd() {
    console.log('dragend')
    this.classList.remove('hold')
    this.className = 'fill'
    start.classList.remove('from')
    x=2
}

function dragEnter() {
    console.log('drag Enter')
    this.classList.add('hovered')
}

function dragLeave() {
    this.classList.remove('hovered')
}

function dragOver(e) {
    e.preventDefault()
    console.log('drag Over')
}

function dragDrop(e) {
    e.preventDefault()
    this.appendChild(fill)
}