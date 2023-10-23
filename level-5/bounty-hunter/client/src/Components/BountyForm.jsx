import React, {useState} from "react"
// import { v4 as uuidv4 } from 'uuid';


export default function BountyForm(props){

const init = {
    firstName: props.firstName ||'',
    lastName: props.lastName || '',
    isLiving: props.living || true,
    bountyAmount: props.bountyAmount || "",
    type: props.type || '',
    // _id: props._id 
}

const [input, setInput] = useState(init)

function handleChange(event){
    const{name, value, type, checked} = event.target 
    setInput(prevInput => {
        return{
            ...prevInput,
            [name]: type === "checkbox"? checked : value
        }
    }    )
}

function handleSubmit(event){
    // event.preventDefault()
    props.submit(input, props._id)
    setInput(init)
}




return(

    <>

    <form onSubmit = {handleSubmit} className = "form">
        <input type = "text" name = "firstName" value = {input.firstName} onChange = {handleChange} placeholder = "First Name"/>
        <input type = "text" name = "lastName" value = {input.lastName} onChange = {handleChange} placeholder = "Last Name"/>
        <input type = "checkbox" name = "living" id = "living"  checked = {input.isLiving}  onChange = {handleChange} placeholder = "Living"/>
        <label htmlFor="living">Living</label>
        <input type = "text" name = "bountyAmount" value = {input.bountyAmount} onChange = {handleChange} placeholder = "Bounty Amount"/>
        <input type = "radio" name = "type" id = "Jedi" value = "Jedi" onChange = {handleChange} placeholder = "Type"/>
        <label htmlFor="Jedi">Jedi</label>
        <input type = "radio" name = "type" id = "Sith" value = "Sith" onChange = {handleChange} placeholder = "Type"/>
        <label htmlFor="Sith">Sith</label>
        <button>{props.btnText}</button>
    </form>
    </>
    
)

}