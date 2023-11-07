import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { RunContext } from '../context/runContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPersonRunning, faMedal, faComment } from '@fortawesome/free-solid-svg-icons'
import Run from './run'
import CommentForm from './commentForm'
import Comment from './comment'

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
                <Run 
                date = {run.lastRun.date}
                _id = {run.lastRun._id}
                distance = {run.lastRun.distance}
                time = {run.lastRun.time}
                pace = {run.lastRun.pace}
                starUsers = {run.lastRun.starUsers}
                runningstarUsers = {run.lastRun.runningstarUsers}
                medalUsers = {run.lastRun.medalUsers}
                addStar = {() => addStar(run.lastRun._id)}
                addRunnerDude = {() => addRunnerDude(run.lastRun._id)}
                addMedal = {() => addMedal(run.lastRun._id)}
                />




           
            </div>)}
        </div>
    )
}