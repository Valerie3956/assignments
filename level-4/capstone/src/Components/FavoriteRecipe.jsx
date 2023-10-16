import React, {useContext} from "react"
import { ContextStore } from "./ContextStore"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as emptyHeart} from "@fortawesome/free-regular-svg-icons"


export default function FavoriteRecipe(props){

    return(
        <div className = "recipe">
            <div className = "recipe--details">
            {props.isFavorite === false && <h2><FontAwesomeIcon icon= {emptyHeart} /></h2>}
           {props.isFavorite && <h2><FontAwesomeIcon icon= {solidHeart} /></h2>}
            <h2>{props.title}</h2>
            <h3>{props.servings}</h3>
            </div>
            <button onClick = {(event) => props.selectRecipe(event, props.id)}>Cook this recipe!</button>
        </div>
    )
}