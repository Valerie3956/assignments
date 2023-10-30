import React, {useContext} from 'react'
// import IssueForm from 
// import IssueList from 
// import Issue from 
import { UserContext} from '../context/userContext'


export default function Profile(){

const {user : {username}} = useContext(UserContext)


    return (
        <div className = "main">
            <h2>Welcome {username}!</h2>

        </div>
    )
}