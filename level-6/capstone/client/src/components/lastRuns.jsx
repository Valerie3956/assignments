import React, { useState, useContext } from 'react'
import axios from 'axios'
import { RunContext } from '../context/runContext'

export default function LastRuns(props) {

    const { runs } = useContext(RunContext)

    // const {userAxios} = useContext(UserContext)

    // const [runs, setRuns] = useState([])

    // useEffect(() => {
    //     userAxios.get("api/run/getAll")
    //     .then(res => setRunners(res.data))
    //     .catch(err => console.log(err.response.data.errMsg))
    // }, [])

    const sortedLastRuns = runs.sort((a, b) => new Date(b.lastRun.date) - new Date(a.lastRun.date))

    console.log(sortedLastRuns)

    return (
        <div className="main">
            <h1>Last Runs</h1>
            {sortedLastRuns.map(run => 
            <div className = "run">
                <h1 className = "nameSocial">{run.username}</h1>
                <h2>Date: {run.lastRun.date.split("T")[0]}</h2> 
                <h2>Distance: {run.lastRun.distance} miles</h2>
                <h3>Time: {run.lastRun.time}</h3>
                <h3>Pace: {run.lastRun.pace}</h3>
            </div>)}
        </div>
    )
}