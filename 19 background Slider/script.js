const arr = [
    'https://images.unsplash.com/photo-1624286337259-6bedecd16870?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1624137308674-ffeca7ccf052?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1577238063601-573282246970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1516616194187-aab5352bc2b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
]

const body = document.querySelector('body')
const showleft = document.getElementById('showleft')
const showright = document.getElementById('showright')

var index = 0

showleft.addEventListener('click', ()=> {
    index--
    if(index < 0) index = arr.length -1

    showimage(index)
})


showright.addEventListener('click', ()=> {
    index++
    if(index >= arr.length) index = 0

    showimage(index)
})

function showimage() {
    body.style.background = `url(${arr[index]}) no-repeat`
    body.style.backgroundSize = `cover`
}