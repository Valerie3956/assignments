

// part 1 get

function createTODO(){
axios.get("https://api.vschool.io/valeriesmith/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++){
            const newDiv = document.createElement('div')
            newDiv.setAttribute("class", "TODO")
            document.body.appendChild(newDiv)
            const title = document.createElement('h2')
            title.textContent = response.data[i].title
            newDiv.appendChild(title)
            const description = document.createElement('h3')
            description.textContent = response.data[i].description
            newDiv.appendChild(description)
            const price = document.createElement('h3')
            price.textContent = `price: ${response.data[i].price}`
            newDiv.appendChild(price)
            const image = new Image(100)
            image.src = `${response.data[i].imgUrl}`
            newDiv.appendChild(image)
            const checkDiv = document.createElement('div')
            checkDiv.setAttribute("class", "check")
            newDiv.appendChild(checkDiv)
            const check = document.createElement("input")
            check.setAttribute ("type", "checkbox")
            check.setAttribute ("value", "true")
                if (response.data[i].completed === true){
                    check.checked = true
                } else {check.checked = false}
            check.setAttribute("id", "checkbox")
            const checkText = document.createElement('h3')
            checkText.textContent = "Completed"
            checkDiv.appendChild(check)
            checkDiv.append(checkText)
            check.addEventListener("change", function(){
                if(check.checked){
                    const update = {completed:true}
                    axios.put(`https://api.vschool.io/valeriesmith/todo/${response.data[i]._id}`, update)
                }
                else {
                    const update = {completed:false}
                    axios.put(`https://api.vschool.io/valeriesmith/todo/${response.data[i]._id}`, update)
                }
            })
            const del = document.createElement('button')
            del.innerText = "DELETE"
            del.addEventListener('click', function(){
                axios.delete(`https://api.vschool.io/valeriesmith/todo/${response.data[i]._id}`)
            })
            newDiv.appendChild(del)
            if (response.data[i].completed === true){
                title.style.textDecoration = "line-through"
                description.style.textDecoration = "line-through"
                price.style.textDecoration = "line-through"
            }
        }
    }
    )
    .catch(error => console.log(error))
}



// ### **Part 2 - POST**

let form = document.getElementById("form")


form.addEventListener("submit", function(e){
    e.preventDefault()
    const newTODO = {
        title: form.title.value,
        description: form.title.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
        completed: false
    }
    axios.post("https://api.vschool.io/valeriesmith/todo", newTODO)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

})

createTODO()

// ### **Part 3 - PUT Part 1**

// - Each todo will have a checkbox where it can be marked complete or incomplete
// - Checking the checkbox should update the database


// ### **Part 4 - DELETE**



// ### **Part 5 - PUT Part 2 (extra credit)**

// - Each Todo will have an "edit" button.
// - When clicked, the info will change to input boxes that are autofilled with the old Todo data
// - A user can change the value of these inputs
// - When the "edit" button is clicked, it will change to a "save" button.
// - When "save" is clicked, the form will disappear, and the new values will be displayed.
// - On save, the todo will be edited in the database.

// Read through the "using id" section in the [API documentation](https://www.notion.so/V-School-s-Todo-API-Documentation-9066d3bb43fb4ee98f242d24759fbc35?pvs=21) to learn how to delete items using the item's unique id.