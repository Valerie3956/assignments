import React, { useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import RunForm from './runForm'

export default function Run(props){

const {distance, time, pace, date, _id} = props

const {deleteRun, editRun} = useContext(UserContext)

const [toggle, setToggle] = useState(false)
const [social, setSocial] = useState(false)

function makeSocial(){
  setSocial(true)
}

let runDate = date.split("T")[0]

return (
  <>

<div>
                    {toggle ?
                        <>
                            <RunForm btnText="Log Edit"
                            submit = {editRun}
                            runId = {_id}
                            initDistance = {distance}
                            initTime = {time}
                            initPace = {pace} 
                            initDate = {date}/>
                            <button onClick={() => setToggle(prevToggle => !prevToggle)} className="smallButton">Close</button>
                            <button className="smallButton" onClick={() => deleteRun(run._id)}>Delete Run</button>
                        </>
                        :
                        <div className="run"> 

    <h2>Date: {runDate}</h2>
    <h2>Distance: {distance} miles</h2>
    <h3>Time: {time}</h3>
    <h3>Pace: {pace}</h3>
                            <button onClick={() => setToggle(prevToggle => !prevToggle)} className="smallButton">Edit Run</button>
                        
                    <button className="smallButton" onClick={() => deleteRun(run._id)}>Delete Run</button>
                        </div >}
                </div>
  </>
)
}