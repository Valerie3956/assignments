const button = document.getElementById("button")
const save = document.getElementById("save")
const previous = document.getElementById("return")
const timeDisplay = document.getElementById("timer")
let timeLeft = 5
let timer = setInterval(countdown, 1000)

let countArr = []

if (timeLeft > 0){
button.addEventListener("click", function(){
countArr.push(1)
document.getElementById("counter").textContent = countArr.length
let count = countArr.length
localStorage.setItem("count", count.valueOf())
return count
})
} else {alert("time's up")}



function countdown(){
if (timeLeft == -1){
    clearTimeout(timer)
} else {
    timeDisplay.textContent = timeLeft + `seconds remaining`
    timeLeft --
}
}

previous.textContent = localStorage.getItem("count")


//track how many times a user clocks on a button 
//display the click count to the user
//store number of clicks in local storage so that the number of clocks will remain even after the page is reset
//EXTRA CREDIT put a countdown timer on the page that stops the user's clicks from counting towards the total