const secondhtml = document.getElementsByClassName('second')[0]
const minutehtml = document.getElementsByClassName('minute')[0]
const hourhtml = document.getElementsByClassName('hour')[0]

const time = document.getElementsByClassName('time')[0]
const day = document.getElementsByClassName('day')[0]

const second = 1000

var startSecond = 1

setInterval(() => {
    const date = new Date()
    const secondDeg = date.getSeconds() * 6 - 90 
    const minuteDeg = date.getMinutes() * 6 - 90 
    const hoursDeg = date.getHours() * 30 - 90 

    hourhtml.style.transform = `rotate(${hoursDeg}deg)`
    secondhtml.style.transform = `rotate(${secondDeg}deg)`
    minutehtml.style.transform = `rotate(${minuteDeg}deg)`
    
    
    time.innerHTML = `${date.getHours()}:${date.getMinutes()}`
    
    var Xmas95 = new Date();
    var optionsWeekday = { weekday: 'long'};
    const dayLong = Intl.DateTimeFormat('en-US', optionsWeekday).format(Xmas95)
    
    const monthLong = Intl.DateTimeFormat('en-US', { month: 'long'}).format(Xmas95)
    day.innerHTML = `${dayLong} ${monthLong} <span class="date">${date.getDate()}</span>`

}, second)
