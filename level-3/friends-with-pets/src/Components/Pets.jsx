export default function Pet(props){
    // let pet = props.map(pet => {
        return(  
            <div className = "pets">
            <h3>Pet Name: {props.petName}</h3>
            <h3>Breed: {props.petBreed}</h3>
            </div>
        )
    // }
    // )
    
}