import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props){

const {logout} = props
const [toggle, setToggle] = useState(false)

    return(
        <div className = "menu">
            <div>
<h1>@runnerName</h1>
            </div>
            <div>
                <h2 onClick = {setToggle(prevToggle => !prevToggle)}>Menu</h2>
                <div>
                    <h2>Log run</h2>
                    <h2>View My Runs</h2>
                    <h2>View Friends' Last Run</h2>
                    <h2>Leaderboard</h2>
                </div>
            </div>
        </div>
    )
}