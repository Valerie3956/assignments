import React, { useState } from "react"
import axios from "axios"
// import Search from "./Search"

const ContextStore = React.createContext()

function ContextStoreProvider(props) {

    //states

    const [formData, setFormData] = React.useState({
        search: "",
    })

    const [recipes, setRecipes] = React.useState([])



    //SEARCH COMPONENT
    //form which makes an API call

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const search = formData.search
    const apiKey = "ZvKjTgk9lvUztpHQ02BiBQ==HdkAm2ooG4zqbGJU"

    function handleSubmit(event) {
        event.preventDefault()

        axios.get('https://api.api-ninjas.com/v1/recipe?query=' + search, {
            headers: { "X-Api-Key": apiKey },
            contentType: "application/json"
        })
            .then(response => setRecipes(response.data.map(x => {
                return {
                    title: x.title,
                    ingredients: x.ingredients,
                    instructions: x.instructions,
                    servings: x.servings
                }
            }))
            )
            .catch(err => console.log(err))
    }

    console.log(recipes)




    return (
        <ContextStore.Provider
            value={{
                handleChange,
                handleSubmit,
                search,
                recipes
            }}
        >
            {props.children}
        </ContextStore.Provider>
    )
}

export { ContextStore, ContextStoreProvider }