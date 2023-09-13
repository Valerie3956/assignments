const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    let fName = form.fName.value
    let lName = form.lName.value
    let gender = form.gender.value
    let destination = form.destination.value
    let meal = form.meal
    let checkedMeal = []
        for (let i = 0; i<meal.length; i++){
            if(meal[i].checked){
                checkedMeal.push(meal[i].value)
            }
        }
    alert(`First Name:${fName} \nLast Name: ${lName} \nGender: ${gender} \nDestination: ${destination} \nMeal Selection ${checkedMeal}`)
 
})