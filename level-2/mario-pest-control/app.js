const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    let goombas = form.goombas.value
    let bobOmbs = form.bob.value
    let cheepCheeps = form.cheep.value
    let total = ((goombas *5) + (bobOmbs * 7) + (cheepCheeps * 11))
    let totalText = document.getElementById("total")
    totalText.textContent = total
})