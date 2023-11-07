import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { RunContext } from '../context/runContext'
import RunForm from './runForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPersonRunning, faMedal, faComment } from '@fortawesome/free-solid-svg-icons'
import CommentForm from './commentForm'
import Comment from './comment'

export default function Run(props) {

  const { distance, time, pace, date, _id, starUsers, medalUsers, runningstarUsers, addStar, addRunnerDude, addMedal, comments } = props

  const { deleteRun, editRun } = useContext(UserContext)
const {runAxios} = useContext(RunContext)
  const initInputs = {
    content: comments.content || ""
  }

  const [inputs, setInputs] = useState(initInputs)

  const [toggle, setToggle] = useState(false)

const [runComments, setRunComments] = useState([])

  // get all comments for this run
  useEffect(() => {
    setRunComments(comments)
  }, [])

    //function for the new comment form
    function handleChange(e){
      const {name, value} = e.target
      setInputs(prevInputs => ({
          ...prevInputs,
        [name]: value
      }))
    }
  
    function handleSubmit(e){
      // e.preventDefault()
      runAxios.post(`/api/comments/${_id}`, inputs)
      .then(res => addComment(res.data))
      .catch(err => console.log(err.response.data.errMsg))
      
      setInputs(initInputs)
    }
  
    //update state after a new comment is added
    function addComment(newComment){
          setRunComments(prevState => (
   [...prevState, newComment]
          ))
  }
  
  //delete comment
  
  function deleteComment(commentId){
    runAxios.delete(`api/comments/${commentId}`)
    .then(setRunComments(prevComments => prevComments.filter(comment => comment._id !== commentId)))
    .catch(err => console.log(err.response.data.errMsg))
  }
  
  //edit comment
  
  function handleEdit(_id, inputs){
  
    runAxios.put(`/api/comments/${_id}`, inputs)
    .then(res => {
      setRunComments(prevComments => prevComments.map(comment => comment._id === _id? comment : res.data))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

console.log(runComments)

  let runDate = date.split("T")[0]

  return (
    <>

      <div>
        {toggle ?
          <>
            <RunForm btnText="Log Edit"
              submit={editRun}
              runId={_id}
              initDistance={distance}
              initTime={time}
              initPace={pace}
              initDate={date} />
            <button onClick={() => setToggle(prevToggle => !prevToggle)} className="smallButton">Close</button>
            <button className="smallButton" onClick={() => deleteRun(run._id)}>Delete Run</button>
          </>
          :
          <div className="run">
            <h2>Date: {runDate}</h2>
            <h2>Distance: {distance} miles</h2>
            <h3>Time: {time}</h3>
            <h3>Pace: {pace}</h3>
            <div className = "reactions">
                    <h4>{starUsers.length}</h4>
                <FontAwesomeIcon icon={faStar} onClick = {addStar} />
                <h4>{runningstarUsers.length}</h4>
                <FontAwesomeIcon icon={faPersonRunning} onClick = {addRunnerDude} />
                <h4>{medalUsers.length}</h4>
                <FontAwesomeIcon icon={faMedal} onClick = {addMedal}/>
                </div>
            <button onClick={() => setToggle(prevToggle => !prevToggle)} className="smallButton">Edit Run</button>

            <button className="smallButton" onClick={() => deleteRun(run._id)}>Delete Run</button>
          </div >}

          {/* toggle comments view on or off */}
{toggle? 
<>
{runComments.map(comment => <Comment 
{...comment}
key = {comment._id}
deleteComment = {deleteComment}
handleChange = {handleChange}
handleEdit = {handleEdit}
inputs = {inputs}
/>)
 }
 {/* add a form at the bottom of comments to add a comment */}
<CommentForm 
btnText = "Submit Comment" 
toggle = {() => setToggle(prevToggle => !prevToggle)}
handleChange = {handleChange}
handleSubmit = {handleSubmit}
inputs = {inputs.content}
/> 
</>
: 
<div>
<h3>{runComments.length}</h3>
<FontAwesomeIcon icon={faComment} onClick = {() => setToggle(prevToggle => !prevToggle)} />
</div>

}
      </div>
    </>
  )
}