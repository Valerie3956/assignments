import React from "react"

export default function Search(){
    return(
        <div className = "search">
            <form>
                <input id = "search"></input>
                <label htmlFor = "search">I am a search bar </label>
                <button>SEARCH FOR A RECIPE</button>
            </form>
            <div>
                <h1>RECIPES GET RENDERED IN HERE</h1>
            </div>
        </div>
    )
}