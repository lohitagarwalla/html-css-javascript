
checkResize()

window.addEventListener('resize', () => {
    checkResize()
    
})

function checkResize() {    const width = window.innerWidth
    const container = document.querySelector('.container')
    
    if(width < 710) {
        !container.classList.contains('squeze') && container.classList.add('squeze')
    }else {
        container.classList.contains('squeze') && container.classList.remove('squeze')
    }
}


const boxes = document.querySelectorAll('.box p')
console.log(boxes.length)

const upper = 200
var nums = []
var index = 0
for(index; index < boxes.length; index++) {
    nums.push(parseInt(boxes[index].innerHTML))
}

var toshow = []
var start = 0


var ci = setInterval(() => {
    update()
}, 1);

function update() {
    toshow = []
    toshow.push(start * nums[0] / upper)
    toshow.push(start * nums[1] / upper)
    toshow.push(start * nums[2] / upper)
    start++
    if(start > upper) clearInterval(ci)
    var i = 0
    for( i; i<boxes.length; i++)
        boxes[i].innerHTML = toshow[i]
}




