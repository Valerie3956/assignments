import React, {useContext} from "react"
import {ContextStore} from "./ContextStore"

export default function Cook(props){

    const {cook} = useContext(ContextStore)

    return(
        <div className = "cook">
        <h2>Title: {cook.title}</h2>
        <h4>Servings: {cook.servings}</h4>
        <h3>Ingredients List: {cook.ingredients}</h3>
        <h3>Instructions: {cook.instructions}</h3>
        <button>add to my favorites</button>
        </div>
    )
}