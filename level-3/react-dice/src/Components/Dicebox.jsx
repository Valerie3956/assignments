
import React from "react"
import Die from "./Die.jsx"


export default function Dicebox() {

    const [numbers, setNumbers] = React.useState([
        {
            value: 1,
            isSelected: false,
            id: 1
        },
        {
            value: 2,
            isSelected: false,
            id:2
        },
        {
            value: 3,
            isSelected: false,
            id:3
        },
        {
            value: 4,
            isSelected: false,
            id:4
        },
        {
            value: 5,
            isSelected: false,
            id:5
        },
        {
            value: 6,
            isSelected: false,
            id:6
        }])

    function roll() {
        setNumbers(arr => {
            return arr.map(x => {
                if (x.isSelected === true) {
                    return(
                    {...x})
                } else {
        return {
            ...x,
            value: (Math.floor(Math.random() * 6 + 1))
        }
    }
}
//can I change my if statement into a ternary???
            
            )
        })
    }

function freeze(id) {
    console.log(id)
    setNumbers(arr => {
        return arr.map(x => {
            return {
                ...x,
                isSelected: !x.isSelected
            }
        }
        )
    })
}

return (
    <div className="container">
        <Die
            die1={numbers[0].value}
            die2={numbers[1].value}
            die3={numbers[2].value}
            die4={numbers[3].value}
            die5={numbers[4].value}
            die6={numbers[5].value}
            handleClick={freeze}
        />
        <button className="roll" onClick={roll}>Roll</button>
    </div>
)
}

//separate my onClicks so that each individual die gets toggled
