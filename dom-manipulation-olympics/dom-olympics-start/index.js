//bronze challenge

// this didn't work, saving here so I know that it didn't work
// let newH1 = document.createElement("h1")
// newH1.textContent = "JavaScript Made This!!"
// document.body.append(newH1)

let header = document.getElementById("header")
header.innerHTML += "<h1> JavaScript Made This!! </h1> <h2><span class = 'name'>Valerie</span> wrote the JavaScript</h2>"

//OMG I spent 20 minutes figuring out that it's "innerHTML" and not "innerHtml"... It's leviOOOsa... not leviosAAAA...


//silver challenge

let msgLeft = document.getElementsByClassName("message left")

msgLeft[0].textContent = "Mama. Be careful not cut your finger mama"
msgLeft[1].textContent = "Mama. You may NOT cut your mama finger!"

let msgRight = document.getElementsByClassName("message right")

msgRight[0].textContent = "I'll be careful Claire."
msgRight[1].textContent = "I promise I'll be VERY careful, Claire..."


function clear(){
    msgLeft[0].textContent = ""
    msgLeft[1].textContent = ""
    msgRight[0].textContent = ""
    msgRight[1].textContent = ""
}

document.getElementById("clear-button").addEventListener("click", clear )

//gold challenge

// if else loop with style changes

let dropDown = document.getElementById("theme-drop-down")

dropDown.addEventListener("change", colorChange)


// function colorChange(value) {
// console.log("yay you did it Mama!!!")
// }

function colorChange () {
    
    if (dropDown.value === "theme-one") {
        document.body.getElementsByClassName("message left").style.backgroundColor = "blue"
        console.log("YOU ROCK, VAL") } else {}
}

// if (dropDown.value = "theme-two") {
//     function colorChange ()
// } else {

// }