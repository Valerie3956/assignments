import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
// import { UserContext } from '../context/userContext'
import Runner from './runner'
import { RunContext } from '../context/runContext'


export default function Leaderboard(){
    

    const {runs} = useContext(RunContext)
    console.log(runs)

    const sortedRunners = runs.sort((a, b) => b.totalMiles - a.totalMiles)



    return(
        <div className = "main">
            <h1 className = "title">Leaderboard</h1>
            {sortedRunners.map(runner => <Runner {...runner} key = {runner._id}/>)}
        </div>
    )
}