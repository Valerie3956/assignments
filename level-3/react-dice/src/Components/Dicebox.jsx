
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
            id: 2
        },
        {
            value: 3,
            isSelected: false,
            id: 3
        },
        {
            value: 4,
            isSelected: false,
            id: 4
        },
        {
            value: 5,
            isSelected: false,
            id: 5
        },
        {
            value: 6,
            isSelected: false,
            id: 6
        }])

    const die = numbers.map(x => {
        return (
            <Die
                number={x.value}
                id={x.id}
                isSelected={x.isSelected}
                handleClick={freeze}
            />
        )
    })

    function roll() {
        setNumbers(arr => {
            return arr.map(x => {
                if (x.isSelected === true) {
                    return (
                        { ...x })
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
        setNumbers(arr => {
            return arr.map(x => {
                if (x.id === id){
                return {
                    ...x,
                    isSelected: !x.isSelected
                }}
                return x
            }
            )
        })
    }

    return (
        <div className="container">
            {die}
            <button className="roll" onClick={roll}>Roll</button>
        </div>
    )
}

//separate my onClicks so that each individual die gets toggled
