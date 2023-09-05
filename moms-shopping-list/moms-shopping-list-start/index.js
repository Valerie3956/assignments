
const form = document.addItem



form.addEventListener("submit", function(e){
    e.preventDefault()
    const listItem = form.title.value
    let newItem = document.createElement("li")
    newItem.textContent = listItem
    document.getElementById("list").appendChild(newItem)

    let edit = document.createElement("button")
    edit.innerHTML = "edit"
    newItem.appendChild(edit)

    edit.addEventListener("click", function(e){
        edit.innerHTML = "save"
        let editForm = document.createElement("input")
        editForm.setAttribute("form", "text")
        editForm.value = listItem
        newItem.append(editForm)
        edit.addEventListener("click", function(e){
            newItem.textContent = editForm.value
            let edit = document.createElement("button")
            edit.innerHTML = "edit"
            newItem.appendChild(edit)
            let del = document.createElement("button")
             del.innerHTML = "X"
            newItem.appendChild(del)
            del.addEventListener("click", function(e){
            del.parentElement.remove()
    })

        })
    }, {once: true})
   
    let del = document.createElement("button")
    del.innerHTML = "X"
    newItem.appendChild(del)
    del.addEventListener("click", function(e){
        del.parentElement.remove()
    })

    form.title.value = ""
})


// part 1 
    //A user will be able to add list items to the pre-built ul using the pre-built form
    //New list items should have the same format as the li's that come with the git repo

//part 2
    //A user will be able to delete items using an items delete button


//extra credit
    // A user will be able to click the "edit" button and see an input box appear
    // When the user clicks the "edit" button, a "save" button replace the "edit" button
    // The input box will automatically have the value of the list item
    // The user can edit and "save" the input box's value
    // On save, the input box will disappear, and the new value will appear