import React from 'react'

export default function Issues(props){

  const {title, description} = props
  return (
    <div className="issue">
<h2>{title}</h2>
<h3>{description}</h3>
    </div>
  )
}