import React, { useState, useEffect } from "react";
import axios from "axios"

export const RunContext = React.createContext()


export default function UserProvider(props) {

const runAxios = axios.create()

runAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const [runs, setRuns] = useState([])
    
useEffect(() => {
    runAxios.get("api/run/getAll")
    .then(res => setRuns(res.data))
    .catch(err => console.log(err.response.data.errMsg))
}, [])

console.log(runs)

    return (
        <RunContext.Provider
            value={{
runs
            }}

        >
            {props.children}
        </RunContext.Provider>
    )
}