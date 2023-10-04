import data from "./data.jsx"
// import Pets from "./Pets"

export default function Friends (props){
    return(
        < div className = "humans--wrap">
    <div className = "humans">
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
    </div>
    </div>
    )
}