import Vacation from "./Vacation.jsx"
import data from "./data.jsx"



export default function Card() {
    const cards = data.map(item => {
        return (
            < Vacation
                place={item.place}
                price={item.price}
                timeToGo={item.timeToGo}
                imageURL = {item.imageURL}
            />
        )
    })
    return (
        <div className = "card--container">
            {cards}
        </div>
    )
}