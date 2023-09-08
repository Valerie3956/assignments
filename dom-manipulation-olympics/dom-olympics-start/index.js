//bronze challenge


let header = document.getElementById("header")
header.innerHTML += "<h1> JavaScript Made This!! </h1> <h2><span class = 'name'>Valerie</span> wrote the JavaScript</h2>"

//OMG I spent 40 minutes figuring out that it's "innerHTML" and not "innerHtml"... It's leviOOOsa... not leviosAAAA...

//silver challenge

let msgLeft = document.getElementsByClassName("message left")

msgLeft[0].textContent = "There's a coupon for a free gyro with purchase at Arby's, I might just buy some curly fries..."
msgLeft[1].textContent = "I was thinking of making it a large curly fry so we can share"

let msgRight = document.getElementsByClassName("message right")

msgRight[0].textContent = "I'll gladly take those curly fries off your hands!"
msgRight[1].textContent = "I guess I could share A curly fry with you..."


function clear(){
    msgLeft[0].textContent = ""
    msgLeft[1].textContent = ""
    msgRight[0].textContent = ""
    msgRight[1].textContent = ""
}

document.getElementById("clear-button").addEventListener("click", clear )

//gold challenge

let dropDown = document.getElementById("theme-drop-down")


function colorChange () {
    
    if (dropDown.value === "theme-one") {
        function left () {
            let mLeft = document.getElementsByClassName("message left")
            for (let i = 0; i < mLeft.length; i++) {
                mLeft[i].style.backgroundColor = "lightblue"
            }
        }
        function right () {
            let mRight = document.getElementsByClassName("message right")
            for (let i = 0; i < mRight.length; i++) {
                mRight[i].style.backgroundColor = "burlywood"
            }
        }
        left()
        right()
        
        } else if (dropDown.value === "theme-two") {
            function left () {
                let mLeft = document.getElementsByClassName("message left")
                for (let i = 0; i < mLeft.length; i++) {
                    mLeft[i].style.backgroundColor = "burlywood"
                }
            }
            function right () {
                let mRight = document.getElementsByClassName("message right")
                for (let i = 0; i < mRight.length; i++) {
                    mRight[i].style.backgroundColor = "lightblue"
                }
            }
            left()
            right()
}
}

dropDown.addEventListener("change", colorChange)

