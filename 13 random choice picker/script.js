const text = document.querySelector('textarea')
const tags = document.querySelector('.tags')

text.addEventListener('keyup', (e) => {
    
    console.log('a', e.target.value)
    var string = text.value
                    .split(',')
                    .filter(f => f != ' ')
                    .filter(f => f != '')
                    .map(tag => `<span>${tag}</span>`)
                    .join('')

    tags.innerHTML = string
    console.log(string)

    if(e.keyCode === 13) startSearch()
})

function startSearch () {
    console.log (tags.innerHTML)
}
