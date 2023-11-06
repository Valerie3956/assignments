import React, { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../context/userContext'

export default function LastRuns(props){

    const {userAxios} = useContext(UserContext)
    
    const [runs, setRuns] = useState([])
    
    useEffect(() => {
        userAxios.get("api/run/getAll")
        .then(res => setRunners(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }, [])

    const sortedLastRuns = runners.sort((a, b) => new Date(b.lastRun[date]) - new Date(a.lastRun[date]))

    console.log(sortedRunners)

    return(
        <div className = "main">
            <h1>Last Runs</h1>
        </div>
    )
}