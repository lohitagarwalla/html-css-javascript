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

var arr = []

body.Recommendations.forEach(element => {
    var obj = {}
    console.log(element.RestaurantName)

    obj.name = element.RestaurantName

    obj.childName = []

    element.menu.forEach(mymenu => {
        if (mymenu.type == "sectionheader") {
            mymenu.children.forEach(child => {
                if (child.type == "item") {
                    if (child.selected == 1) {
                        var childobj = {}
                        console.log("-->",child.name)
                        childobj.name = child.name
                        var childName = recursion(child.children, 1)
                        if(childName.length > 0) childobj.childName = childName
                        obj.childName.push(childobj)
                    }
                }
            })
        }
    })
    arr.push(obj)
});

console.log(arr)

function recursion(children , i) {
    if(!children) return;
    if(children == undefined) return;
    i++
    var childobj = []
    children.forEach(child => {
        var string = ''
        var j = 0
        for(j = 0; j<i; j++) string += '--'
        string += '>'
        if(child.selected == 1) {
            var children = {}
            console.log(string,child.name)
            children.name = child.name
            var childName = recursion(child.children, i)
            if(childName.length > 0) children.childName = childName
            childobj.push(children)
        }
    })
    return childobj
}

console.log(arr[1])