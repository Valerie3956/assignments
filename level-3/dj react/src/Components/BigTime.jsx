import React from "react"

export default function BigTime(props) {
    return (
        <>
            <button onClick={() => props.handleClick(0)}>big time dj</button>
            <button onClick={() => props.handleClick(1)}>big time dj</button>
            <button onClick={() => props.handleClick(2)}>big time dj</button>
            <button onClick={() => props.handleClick(3)}>big time dj</button>
        </>
    )
}