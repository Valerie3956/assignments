export default function Vacation(props){

    let priceIndex
    if (props.price < 500){
        priceIndex = "$"
    } else if (props.price >= 500 && props.price < 1000){
        priceIndex = "$$"
    } else if (props.price >= 1000) {
        priceIndex = "$$$"
    }

    return(
        <div className = "card">
            {<h3 className = "price--index">{priceIndex}</h3>}
            <img src = {`../Images/${props.imageURL}`}></img>
            <h1>{props.place}</h1>
            <h2>{props.price}</h2>
            <h2>{props.timeToGo}</h2>
        </div>
    )
}