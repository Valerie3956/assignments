import React, {useContext, useEffect} from 'react'
import IssueForm from "./issueForm"
import IssueList from "./issuesList"

import { UserContext} from '../context/userContext'


export default function Profile(){

const {user : {username}, addIssue, issues, getUserIssues} = useContext(UserContext)

useEffect(() => {
    getUserIssues()
}, [])

    return (
        <div className = "main">
            <h2>Welcome {username}!</h2>
        <IssueForm addIssue = {addIssue}/>
        <IssueList issues = {issues} />
        </div>
    )
}