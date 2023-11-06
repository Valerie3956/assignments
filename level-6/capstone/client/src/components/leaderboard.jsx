import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from '../context/userContext'
import Runner from './runner'


export default function Leaderboard(props){
    
    const {userAxios} = useContext(UserContext)
    
    const [runners, setRunners] = useState([])
    
    useEffect(() => {
        userAxios.get("api/run/getAll")
        .then(res => setRunners(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }, [])

    const sortedRunners = runners.sort((a, b) => b.totalMiles - a.totalMiles)

    console.log(sortedRunners)

    return(
        <div className = "main">
            <h1 className = "title">Leaderboard</h1>
            {sortedRunners.map(runner => <Runner {...runner} key = {runner._id}/>)}
        </div>
    )
}