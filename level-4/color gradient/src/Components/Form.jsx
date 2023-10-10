import React from "react"

export default function Form(props) {
    return (
        <>
            <h2>Choose Colors</h2>
            <form >
                <label htmlFor = "color1">Color 1</label>
                <input type="color"
                name = "color1"
                value = {props.color1Value}
                onChange = {props.handleChange}
                id = "color1"
                ></input>
                <label htmlFor = "color2">Color 2</label>
                <input type="color"
                name = "color2"
                value = {props.color2Value}
                onChange = {props.handleChange}
                id = "color2"
                ></input>
                <label htmlFor = "angle">Angle</label>
                <input type = "number"
                name = "angle"
                value = {props.angleValue}
                onChange = {props.handleChange}
                id = "angle"
                ></input>
            </form>
        </>
    )
}