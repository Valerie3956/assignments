import React from "react"

export default function Preview(props){
    return(
        <>
            <div>
                <div style = {{width: "400px", height: "200px", background : `linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})`}}></div>
                <textarea style = {{width: "300px", height: "100px"}}value = {`background: linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2}) 
-moz-background: linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2}) 
-webkit: linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})`}
                readOnly></textarea>
            </div>
        </>
    )
}




