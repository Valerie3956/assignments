import React, {useState} from "react"
import { useEffect } from "react"

const ScoreContext = React.createContext()

function ScoreContextProvider(props){

//states

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
])

const [score, setScore] = React.useState(0)

const [acesValue, setAcesValue] = React.useState(0)
const [twosValue, setTwosValue] = React.useState(0)

useEffect(() => {
    aces()
    twos()
}, [numbers])

//aces


function aces(){
   const acesCount =  numbers.reduce((final, val) => {
        if (val.value === 1){
            final ++
        }
        return final
    }, 0)
    setAcesValue(acesCount)
}


//twos

function twos(){
    const twosCount =  numbers.reduce((final, val) => {
         if (val.value === 2){
             final += val.value
         }
         return final
     }, 0)
     setTwosValue(twosCount)
 }


//threes

//fours

//fives

//sixes

//total Upper

//bonus

//total Upper plus bonus

//three of a kind

//four of a kind

//full house

//small straight

//large straight

//yahtzee

//chance

//bonus

//total Lower

//total Upper

//grand total

return (
    <ScoreContext.Provider
    value = {{
        score,
        numbers,
        setNumbers,
        acesValue,
        twosValue
    }}
    
    >
{props.children}

    </ScoreContext.Provider>
)


}

export {ScoreContext, ScoreContextProvider}