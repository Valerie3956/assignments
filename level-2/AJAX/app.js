const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://swapi.dev/api/people", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.results)
    } 
}


function showData(arr){
    arr.map(function(characters){
        const h1 = document.createElement('h1')
        h1.textContent = characters.name
        return document.body.appendChild(h1)
    })
}