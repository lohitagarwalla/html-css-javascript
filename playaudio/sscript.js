const btn = document.getElementById('btn')
var pincode = 0;
var response = 0

var audio = new Audio('song.mp3');

btn.addEventListener('click', async () =>  {
    pincode = document.getElementById('input').value
    btn.disabled = true
    call()
})

function callFunc(myurl) {
    url = myurl
    console.log(url)
    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    
    Http.onreadystatechange =   (e) => {
        response =  Http.responseText
        if(response) {
            const jsonobj = JSON.parse(response)
            checkandplay(jsonobj)
        }
    }

    Http.send(null);
}

function callingfunction() {
    callFunc(geturlbypin(pincode))
    callFunc(geturlbydist(44))
}

function call () {
    callingfunction()
    setInterval(callingfunction, 20000)  //for district
}

function checkandplay(obj)  {
    const date = new Date()
    console.log(date)
    var emailText = ''
    const centers = obj.centers
    // console.log(centers)
    for (var i = 0; i < centers.length; i++) {
        var center = centers[i]
        // console.log(center)
        const sessionLength = center.sessions.length
        for (var j = 0; j < sessionLength; j++) {
            console.log(center.sessions[j].available_capacity, center.sessions[j].min_age_limit, center.name,center.sessions[j].available_capacity_dose1, center.sessions[j].available_capacity_dose2  )
            // if (center.sessions[j].available_capacity === 0 && center.sessions[j].min_age_limit === 18) {
            if (center.sessions[j].available_capacity > 3 || center.sessions[j].available_capacity_dose1 > 1 || center.sessions[j].available_capacity_dose2 > 1) {
                if(i===0) {
                    emailText += '\n'
                }
                emailText += 'Center Name: ' + center.name 
                emailText += ', available: ' + center.sessions[j].available_capacity 
                emailText += ',  For min age:' + center.sessions[j].min_age_limit 
                emailText += ', address:' + center.address +  '.\n'
            }
        }
    }
    emailText && console.log('email text: \n', emailText)
    emailText && audio.play();
} 


function geturlbydist(distCode) {
    var link = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id="  //&date="
    link += distCode
    link += "&date="
    // const curl = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id="
    const date = new Date()
    const day = date.getDate()
    var month = date.getMonth() + 1
    if(month <10) {
        month = '0' + month
    }
    const url = link + day + '-' + month + '-2021'
    return url
}

function geturlbypin(pinCode) {
    var link = createLinkByPin(pinCode)
    
    const date = new Date()
    const day = date.getDate()
    var month = date.getMonth() + 1
    if(month <10) {
        month = '0' + month
    }
    const url = link + day + '-' + month + '-2021'
    return url
}

const createLinkByPin = function (pinCode) {
    var link = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="  //785640&date="  //09-05-2021
    link += pinCode
    link += "&date="
    return link
}