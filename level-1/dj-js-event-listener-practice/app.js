//blue

button.addEventListener("mouseover", function () {
    document.getElementById("button").style.backgroundColor = "blue"})

//red

button.addEventListener("mousedown", function () {
    document.getElementById("button").style.backgroundColor = "red"})

//yellow

button.addEventListener("mouseup", function () {
    document.getElementById("button").style.backgroundColor = "yellow"})

//green
button.addEventListener("dblclick", function () {
    document.getElementById("button").style.backgroundColor = "green"})

//orange

document.addEventListener("wheel", function () {
    document.getElementById("button").style.backgroundColor = "orange"})

//keyboard
document.addEventListener("keydown", keyboard)
function keyboard(e) {
console.log(e.key)

if ( e.key === "b") {
        document.getElementById("button").style.backgroundColor = "blue"
    } else if ( e.key === "r") {
        document.getElementById("button").style.backgroundColor = "red"
    } else if ( e.key === "y") {
        document.getElementById("button").style.backgroundColor = "yellow"
    } else if ( e.key === "g") { 
        document.getElementById("button").style.backgroundColor = "green"
    } else if ( e.key === "o") {
        document.getElementById("button").style.backgroundColor = "orange"
    } else {}
    }




