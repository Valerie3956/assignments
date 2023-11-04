import React, { useState } from "react";
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [userRuns, setUserRuns] = useState([])

    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    async function login (credentials) {
        try{
            const loginResponse = await axios.post("/auth/login", credentials)
            const { user, token } = loginResponse.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))

            const userRunResponse = await userAxios.get("/api/run/user")
            setUserRuns(userRunResponse.data)
        }
        
            catch(err){
                if(err.response){handleAuthError(err.response.data.errMsg)
            } else {
        console.log(err.response.data.errMsg)
            }
    }
}
    


    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            errMsg:""
        })
        setUserRuns([])
    }

    function handleAuthError(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthError(){
        setUserState(prevState => ({
            ...prevState,
            errMsg:""
        }))
    }

    //addRun

    async function addRun(newRun){
        try{
            //add run to DB
            const runResponse = await userAxios.post("api/run", newRun)
            // console.log(runResponse.data.runUser.totalMiles)
            //updates userState
            setUserState(prevUserState => ({
                ...prevUserState,
                user:{
                    ...prevUserState.user,
                    totalMiles: runResponse.data.runUser.totalMiles
                }
            }))
            //update user runs in state
            const userRunResponse = await userAxios.get("/api/run/user")
            setUserRuns(userRunResponse.data)
        } catch(err){
            console.log(err)
        }

    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                userAxios,
                resetAuthError,
                addRun
            }}

        >
            {props.children}
        </UserContext.Provider>
    )
}