import React, { useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router-dom'
import RecipeList from "./RecipeList";
import FavoriteRecipe from "./FavoriteRecipe";

const ContextStore = React.createContext()

function ContextStoreProvider(props) {

    const navigate = useNavigate() 

    //states

    const [formData, setFormData] = React.useState({
        search: "",
    })

    const [recipes, setRecipes] = React.useState([])

    const [cook, setCook] = React.useState({
        title: "",
        ingredients: "",
        instructions: "",
        servings: "",
        id: "",
        isFavorite: false
    })

    const [favorites, setFavorites] = React.useState([])

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
                    servings: x.servings,
                    id: uuidv4(),
                    isFavorite: false
                }
            }))
            )
            .catch(err => console.log(err))
    }



// map through array of recipes and generate recipe list

const recipeList = recipes.map(x => {
    return <RecipeList 
    title = {x.title}
    servings = {x.servings}
    ingredients = {x.ingredients}
    instructions = {x.instructions}
    id = {x.id}
    key = {recipes.indexOf(x)}
    selectRecipe = {selectRecipe}
    isFavorite = {x.isFavorite}
    addFavorite = {addFavorite}
    removeFavorite = {removeFavorite}
    />
})

// select a recipe and put it in Cook state

function selectRecipe(event, id){

const selectedRecipe = recipes.find(recipe => recipe.id === id)

    setCook({
        title: selectedRecipe.title,
        ingredients: selectedRecipe.ingredients,
        instructions: selectedRecipe.instructions,
        servings: selectedRecipe.servings,
        id: selectedRecipe.id,
        isFavorite: selectedRecipe.isFavorite
    })
    navigate("/cook")
}

//display favorite recipes

const favoriteRecipeList = favorites.map(x => {
    return <FavoriteRecipe 
    title = {x.title}
    servings = {x.servings}
    ingredients = {x.ingredients}
    instructions = {x.instructions}
    id = {x.id}
    key = {favorites.indexOf(x)}
    selectRecipe = {selectRecipe}
    isFavorite = {x.isFavorite}
    />
})

//toggle favorites

function addFavorite(cook){
    setCook(prevCook => {
        return{
            ...prevCook,
            isFavorite : true
        }
    })
        setFavorites(prevFavorites => {
        return[...prevFavorites, cook]
            }
            )
    }

        console.log(cook);
        console.log(favorites);




function removeFavorite(id){
    setCook(prevCook => {
        return{
            ...prevCook,
            isFavorite : false
        }
    })

    setFavorites(prevFavorites => {
        const newFavList = prevFavorites.filter(arr => arr.id !== id)
        return newFavList
    })

}

    return (
        <ContextStore.Provider
            value={{
                handleChange,
                handleSubmit,
                search,
                recipes,
                selectRecipe,
                recipeList,
                cook,
                addFavorite,
                removeFavorite,
                favoriteRecipeList,
                FavoriteRecipe
            }}
        >
            {props.children}
        </ContextStore.Provider>
    )
}

export { ContextStore, ContextStoreProvider }