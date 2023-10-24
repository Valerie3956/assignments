import React, { useState } from "react"
import axios from "axios"


const JournalContext = React.createContext()

function JournalContextProvider(props) {

    const [journalEntries, setJournalEntries] = React.useState([{
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


    const init = {
        date: "",
        entry: ""
    }

    const [formData, setFormData] = React.useState(init)

    //JOURNAL FORM SUBMIT

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setJournalEntries(prevEntries => [...prevEntries, formData])
        setFormData(init)
        // POST REQUEST TO DB
        // axios.post("/journal", newEntry)
        //     .then(res => setJournalEntries(prevEntries => [...prevEntries, newEntry]))
        //     .catch(err => console.log(err.res.data.errMsg))
    }


    // GET REQUEST FROM DB
    // axios.get("/journal")
    // .then(res => {setJournalEntries(res.data)})
    // .catch(err => console.log(err.response.data.errMsg))











    return (
        <JournalContext.Provider
            value={{
                journalEntries,
                handleChange,
                handleSubmit,
                formData
            }}
        >
            {props.children}
        </JournalContext.Provider>
    )
}

export { JournalContext, JournalContextProvider }