import React, {useState} from 'react'
import { Link } from "react-router-dom"

export default function JournalEntries(){

    const [journalEntries, setJournalEntries] = React.useState([ {
        date: "October 23, 2023",
        entry: "Dear Diary, Today was absolutely fantastic! Nobody has days like me, nobody. I had the best meetings, made tremendous deals, and my entry today? Well, it's just tremendous, the best entry. Everybody's talking about it. Believe me."
      },
      {
        date: "October 24, 2023",
        entry: "Dear Diary, What a day! The date? It doesn't matter, but it was tremendous. I had the biggest, most beautiful entry today. People are saying it's the best entry ever written. Nobody writes entries like me, nobody. It's just tremendous."
      },
      {
        date: "October 25, 2023",
        entry: "Dear Diary, Today was incredible, just like every day in my life. The date was perfect, just perfect. My entry? Well, it was tremendous, the best you'll ever see. People are calling me, saying, 'Your entries are unbelievable!' And they're right, they really are."
      },
      {
        date: "October 26, 2023",
        entry: "Dear Diary, Another day, another victory! The date? It was the best date, nobody has better dates. My entry today? Let me tell you, it was spectacular. People are raving about it. They say, 'Donald, your entries are pure gold!' And they're absolutely right."
      },
      {
        date: "October 27, 2023",
        entry: "Dear Diary, Today was tremendous, just like every day of my life. The date doesn't matter, but it was a tremendous date, believe me. My entry? It's a winner, just like me. People are saying, 'Your entries are the best, unmatched!' And they're right, they really are."
      }])

      const journal = journalEntries.map(entry => {
        return(
            <>
            <h4>{entry.date}</h4>
            <p>{entry.entry}</p>
            </>
        )
      })

return (
    <div className = "main">
        <div className = "journal">
        {journal}
        </div>
        <Link to="/Journal" >
                <button className = "button">Add New Journal Entry</button>
                </Link>
        <div className = "navButtons">
                <Link to="/" >
                <button className = "button">Home</button>
                </Link>
            <Link to="/meditation" >
                <button className = "button">Meditate</button>
                </Link>
                <Link to="/checklist" >
                <button className = "button">Checklist</button>
                </Link>
            </div>
    </div>
)
}