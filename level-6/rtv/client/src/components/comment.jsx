import React, {useState, useContext, useEffect} from 'react'





export default function Comment(props){

const {content} = props

    return(
        <div className = "comment">
        <p>{content}</p>
        </div>
    )
}