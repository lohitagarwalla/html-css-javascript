const filePath = require('./foodyo_output.json')
const fs = require('fs')

const readFile = function (filePath) {
    const bufferData = fs.readFileSync(filePath)
    const jsonData = bufferData.toString()
    const data = JSON.parse(jsonData)
    return data
}

const data = readFile('./foodyo_output.json')
const body = data.body


body.Recommendations.forEach(element => {
    console.log(element.RestaurantName)

    element.menu.forEach(mymenu => {
        if (mymenu.type == "sectionheader") {
            mymenu.children.forEach(child => {
                if (child.type == "item") {
                    if (child.selected == 1) {
                        console.log("-->",child.name)
                        recursion(child.children, 1)
                    }
                }
            })
        }
    })
});

function recursion(children , i) {
    if(!children) return;
    if(children == undefined) return;
    i++
    children.forEach(child => {
        var string = ''
        var j = 0
        for(j = 0; j<i; j++) string += '--'
        string += '>'
        if(child.selected == 1) {
            console.log(string,child.name)
            recursion(child.children, i)
        }
    })
}

