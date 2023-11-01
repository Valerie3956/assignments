import React, {useState, useEffect, useContext} from 'react'
import axios from "axios"
import IssueList from './issuesList'
import { UserContext } from '../context/userContext'

export default function Public(props){

    const {userAxios, upVote, downVote} = useContext(UserContext)

const [allIssues, setAllIssues] = useState([])

//get all issues

useEffect(() => {
    userAxios.get("/api/issues")
    .then(res => {
        setAllIssues(res.data)})
    .catch(err => console.log(err.response.data.errMsg))
}, [])

//upvote issue

function upVoteIssue(issueId) {
    userAxios.put(`/api/issues/upVote/${issueId}`)
        .then(res => {
            setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
            upVote(issueId, res.data)
        })
        .catch(err => console.log(err))
}

//downvote issue

function downVoteIssue(issueId) {
    userAxios.put(`/api/issues/downVote/${issueId}`)
        .then(res => {
            setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
            downVote(issueId, res.data)
        })
        .catch(err => console.log(err))
}

return(
    <div className='main'>
    <IssueList issues = {allIssues} upVoteIssue ={(issueId) => upVoteIssue(issueId)} downVoteIssue ={(issueId) => downVoteIssue(issueId)}/>
    </div>
)

}