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

const [acesValue, setAcesValue] = React.useState({
    value : 0,
    isSelected : false
})
const [twosValue, setTwosValue] = React.useState({
    value : 0,
    isSelected : false
})
const [threesValue, setThreesValue] = React.useState({
    value : 0,
    isSelected : false
})
const [foursValue, setFoursValue] = React.useState({
    value : 0,
    isSelected : false
})
const [fivesValue, setFivesValue] = React.useState({
    value : 0,
    isSelected : false
})
const [sixesValue, setSixesValue] = React.useState({
    value : 0,
    isSelected : false
})
const [subtotalUpper, setSubtotalUpper] = React.useState(0)
const [bonus, setBonus] = React.useState(0)
const [totalUpper, setTotalUpper] = React.useState(0)

useEffect(() => {
    aces()
    twos()
    threes()
    fours()
    fives()
    sixes()
    subtotalUpperFunc()
    upperBonus()
    totalUpperFunc()
}, [numbers])

//aces


function aces(){if (acesValue.isSelected === false){
    const acesCount =  numbers.reduce((final, val) => {
         if (val.value === 1){
             final ++
         }
         return final
     }, 0)
     setAcesValue(prevValue => {
        return{
            ...prevValue,
            value:acesCount
        }
     })

}
}


//twos

function twos(){if ( twosValue.isSelected === false){
    const twosCount =  numbers.reduce((final, val) => {
         if (val.value === 2){
             final += val.value
         }
         return final
     }, 0)
     setTwosValue(prevValue => {
        return{
            ...prevValue,
            value:twosCount
        }
     })
 }

}


//threes

function threes(){if ( threesValue.isSelected === false){

    const threesCount =  numbers.reduce((final, val) => {
         if (val.value === 3){
             final += val.value
         }
         return final
     }, 0)
     setThreesValue(prevValue => {
        return{
            ...prevValue,
            value:threesCount
        }
     })
}
 }

//fours

function fours(){if ( foursValue.isSelected === false){

    const foursCount =  numbers.reduce((final, val) => {
         if (val.value === 4){
             final += val.value
         }
         return final
     }, 0)
     setFoursValue(prevValue => {
        return{
            ...prevValue,
            value:foursCount
        }
     })
}
 }

//fives

function fives(){if ( fivesValue.isSelected === false){

    const fivesCount =  numbers.reduce((final, val) => {
         if (val.value === 5){
             final += val.value
         }
         return final
     }, 0)
     setFivesValue(prevValue => {
        return{
            ...prevValue,
            value:fivesCount
        }
     })
}
 }


//sixes

function sixes(){if ( sixesValue.isSelected === false){

    const sixesCount =  numbers.reduce((final, val) => {
         if (val.value === 6){
             final += val.value
         }
         return final
     }, 0)
     setSixesValue(prevValue => {
        return{
            ...prevValue,
            value:sixesCount
        }
     })
}
 }

//total Upper

function subtotalUpperFunc(){
    setSubtotalUpper(acesValue.value + twosValue.value + threesValue.value + foursValue.value + fivesValue.value + sixesValue.value)
}

//bonus

function upperBonus(){
    if(subtotalUpper >= 63){
        setBonus(35)
    } else {
        setBonus(0)
    }
}

//total Upper plus bonus

function totalUpperFunc(){
setTotalUpper(subtotalUpper + bonus)
}

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
        twosValue,
        threesValue,
        foursValue,
        fivesValue,
        sixesValue,
        subtotalUpper,
        bonus,
        totalUpper
    }}
    
    >
{props.children}

    </ScoreContext.Provider>
)


}

export {ScoreContext, ScoreContextProvider}