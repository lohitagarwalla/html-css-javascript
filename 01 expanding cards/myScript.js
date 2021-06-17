const panels = document.querySelectorAll('.panel')
console.log(panels)
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeallactive()
        panel.classList.add('active')
    })
});

function removeallactive() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}