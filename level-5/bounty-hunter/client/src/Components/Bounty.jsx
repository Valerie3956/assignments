import React, {useState} from "react"
import BountyForm from "./BountyForm"

export default function Bounty(props) {
const [editToggle, setEditToggle] = useState(false)

    return(

        <div className="bounty">
{ !editToggle ?
<>
        <h3>{props.firstName}</h3>
        <h3>{props.lastName}</h3>
        <h4>{props.type}</h4>
        <h4>{props.bountyAmount}</h4>
        <h4>{props.living? "alive" : "dead"}</h4>
        <button onClick = {() => props.handleDelete(props._id)}>DELETE</button>
        <button onClick ={() => setEditToggle(prevToggle => !prevToggle)}>EDIT</button>
</>
        :

        <>
        <BountyForm 
        firstName = {props.firstName}
        lastName = {props.lastName}
        type = {props.type}
        bountyAmount = {props.bountyAmount}
        living = {props.living}
        _id = {props._id}
        btnText = "submit edit"
        submit = {props.editBounty}
        />
        <button onClick = {() => setEditToggle(prevToggle => !prevToggle)}>close</button>
        </>
        
    }
    </div>
        )
}