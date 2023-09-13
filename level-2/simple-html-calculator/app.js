const addition = document.getElementById("addition")

addition.addEventListener("submit", function(event){
    event.preventDefault()
    let num1 = addition.add1.value
    let num2 = addition.add2.value
    let result = (parseInt(num1) + parseInt(num2))
    let showResult = document.createElement("p")
    showResult.textContent = result
    addition.appendChild(showResult)
    addition.add1.value = ""
    addition.add2.value = ""
})

const subtraction = document.getElementById("sub")

subtraction.addEventListener("submit", function(event){
    event.preventDefault()
    let num1 = subtraction.sub1.value
    let num2 = subtraction.sub2.value
    let result = (num1 - num2)
    let showResult = document.createElement("p")
    showResult.textContent = result
    subtraction.append(showResult)
    subtraction.sub1.value = ""
    subtraction.sub2.value = ""
})

const multiplication = document.getElementById("mul")

multiplication.addEventListener("submit", function(event){
    event.preventDefault()
    let num1 = multiplication.mul1.value
    let num2 = multiplication.mul2.value
    let result = (num1 * num2)
    let showResult = document.createElement("p")
    showResult.textContent = result
    multiplication.append(showResult)
    multiplication.mul1.value = ""
    multiplication.mul2.value = ""
})
