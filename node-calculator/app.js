const readline = require("readline-sync")




const num1 = readline.question("Please enter your first number  ")
const num2 = readline.question("Please enter your second number  ")
const operator = readline.question("Please enter the operation to perform. (a)dd, (s)ubtract, (m)ultiply or (d)ivide  ")

function sum(num1, num2){
    console.log(parseInt(num1) + parseInt(num2))
}

function sub(num1, num2){
    console.log(num1 - num2)
}

function mul(num1, num2){
    console.log(num1 * num2)
}

function div(num1, num2){
    console.log(num1 / num2)
}


if (operator === "a") {
    sum(num1, num2)
} else if (operator === "s") {
    sub(num1, num2)
} else if (operator === "m") {
    mul(num1, num2)
} else if (operator === "d") {
    div(num1, num2)
} else {}
