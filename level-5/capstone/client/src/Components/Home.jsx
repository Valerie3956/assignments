import React, {useState} from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

export default function Footer(){

    const [quoteOfTheDay, setQuoteOfTheDay] = React.useState({
        quote: 'Zuko, you must look within yourself to save yourself from your other self. Only then will your true self reveal itself.',
        author: "Uncle Iroh... possibly"
    }
        )

    // axios.get('https://zenquotes.io/api/today', {
    //     contentType: "application/json"
    // })
    // .then(res => setQuoteOfTheDay(res))
    // .catch(err => console.log(err))

console.log(quoteOfTheDay)
    return(
        <div className = "main">
            <div className = "quote">
            <h2>{quoteOfTheDay.quote}</h2>
            <h3>{quoteOfTheDay.author}</h3>
            </div>
            <div className = "navButtons">
            <Link to="journal" >
                <button className = "button">Journal</button>
                </Link>
                <Link to="meditation" >
                <button className = "button">Meditate</button>
                </Link>
                <Link to="checklist" >
                <button className = "button">Checklist</button>
                </Link>
            </div>
            <p>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></p>
        </div>
    )
}