import React, {useContext} from "react"
import Ugly from "./Ugly"
import {ContextStore} from '../ContextStore'

export default function Display(){

const {ugly} = useContext(ContextStore)

    return(
        <div>
  {ugly}
        </div>
    )
}