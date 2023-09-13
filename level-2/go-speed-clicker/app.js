const button = document.getElementById("button")
const save = document.getElementById("save")

let countArr = []
let count = countArr.length

button.addEventListener("click", function(){
countArr.push(1)
document.getElementById("counter").textContent = countArr.length
})

button.addEventListener("click", function(){
    localStorage.setItem("count", count)
})

// track how many times a user clocks on a button 
//display the click count to the user
//store number of clicks in local storage so that the number of clocks will remain even after the page is reset
//(maybe put a reset button in there???????)
//EXTRA CREDIT put a countdown timer on the page that stops the user's clicks from counting towards the total