import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from '../context/userContext'



export default function Comment(props){
    
    const {user : {_id}} = useContext(UserContext)
    const userId = _id
    
    
    const {content, user, deleteComment} = props


console.log(user)

    return(
        <div className = "comment">
        <p>{content}</p>
        {user === userId && <>
        <button className = "button">Edit</button>
        <button className = "button" onClick = {() => deleteComment(props._id)}>Delete</button>
        </>}
        </div>
    )
}