const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showPokemon(data.objects[0].pokemon)
    }
}

function showPokemon(arr){
    arr.map(function(pokemon){
        const h2 = document.createElement('h2')
        h2.textContent = pokemon.name
        let h1 = document.getElementById("title")
        h1.append(h2)
    })
}