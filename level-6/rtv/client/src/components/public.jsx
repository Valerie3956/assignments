import React, {useState, useEffect, useContext} from 'react'
import axios from "axios"
import IssueList from './issuesList'
import { UserContext } from '../context/userContext'

export default function Public(props){

    const {userAxios} = useContext(UserContext)

const [allIssues, setAllIssues] = useState([])

useEffect(() => {
    userAxios.get("/api/issues")
    .then(res => {
        setAllIssues(res.data)})
    .catch(err => console.log(err.response.data.errMsg))
}, [])

return(
    <div className='main'>
    <IssueList issues = {allIssues} />
    </div>
)

}