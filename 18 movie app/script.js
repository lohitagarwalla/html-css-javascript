// const example api request = https://api.themoviedb.org/3/movie/550?api_key=a727700ec93237d25e145517fb24b2f2

const form = document.getElementById('form')
const search = document.getElementById('search')

const api_key = 'a727700ec93237d25e145517fb24b2f2'

var popular = 'https://api.themoviedb.org/3/movie/popular?api_key=a727700ec93237d25e145517fb24b2f2&language=en-US&page=1'

var query = 'https://api.themoviedb.org/3/search/movie?api_key=a727700ec93237d25e145517fb24b2f2&language=en-US&page=1&include_adult=false&query='

var searchTerm = 'hello'

makeRequest(popular)

async function makeRequest(url) {
    const res = await fetch(url)
    const json = await res.json()
    console.log(json.results)

    const htmldata = prepareHTML(json.results)
    updateHTML(htmldata)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    searchTerm = search.value
    console.log(searchTerm)
    makeRequest(query + searchTerm)
})


function prepareHTML(results) {

    var string = ''

    results.forEach(result => {
        string += `<div class="movie">
        <img src="https://image.tmdb.org/t/p/w1280${result.poster_path}" alt="">
        <div class="desc">
            <h3>${result.original_title}</h3>
            <span class="green">${result.vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${result.overview}
        </div></div>`
    })
    return string
}

function updateHTML (htmlstring) {
    const main = document.querySelector('main')
    main.innerHTML = ''

    main.innerHTML = htmlstring
}