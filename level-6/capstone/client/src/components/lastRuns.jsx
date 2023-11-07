import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { RunContext } from '../context/runContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPersonRunning, faMedal, faComment } from '@fortawesome/free-solid-svg-icons'

export default function LastRuns(props) {

    const { runs, addStar, addRunnerDude, addMedal, getAllRuns } = useContext(RunContext)

    const [toggle, setToggle] = useState(false)

useEffect (() => {
    getAllRuns()
}, [])


const lastRuns = runs.filter(run => run.lastRun)

    const sortedLastRuns = lastRuns.sort((a, b) => new Date(b.lastRun.date) - new Date(a.lastRun.date))


    // console.log(sortedLastRuns)

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
                <div className = "reactions">
                    <h4>{run.lastRun.starUsers.length}</h4>
                <FontAwesomeIcon icon={faStar} onClick = {() => addStar(run.lastRun._id)} />
                <h4>{run.lastRun.runningstarUsers.length}</h4>
                <FontAwesomeIcon icon={faPersonRunning} onClick = {() => addRunnerDude(run.lastRun._id)} />
                <h4>{run.lastRun.medalUsers.length}</h4>
                <FontAwesomeIcon icon={faMedal} onClick = {() => addMedal(run.lastRun._id)}/>
                </div>
            </div>)}
        </div>
    )
}