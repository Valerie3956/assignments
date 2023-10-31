import React, {useState, useContext, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import CommentForm from "./commentForm"
import Comment from './comment'
import { UserContext } from '../context/userContext'

export default function Issues(props){

  const initInputs = {
    content: ""
  }

  const [toggle, setToggle] = useState(false)
  const [comments, setComments] = useState([])
  const [inputs, setInputs] = useState(initInputs)

  const {title, description, _id} = props


  const {userAxios} = useContext(UserContext)

  //get all comments for this issue
  useEffect(() => {
    userAxios.get(`/api/comments/issue/${_id}`)
    .then(res => {
        setComments(res.data)
      })
    .catch(err => console.log(err.response.data.errMsg))
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
    e.preventDefault()
    userAxios.post(`/api/comments/${_id}`, inputs)

    .then(res => addComment(res.data))
    .catch(err => console.log(err.response.data.errMsg))
    
    setInputs(initInputs)
  }

  //update state after a new comment is added
  function addComment(newComment){
        setComments(prevState => (
 [...prevState, newComment]
        ))
}


//stuff that gets rendered
  return (
    <div className="issue">
<h2>Title: {title}</h2>
<h3>Description: {description}</h3>
<div className = "icons">
<h3><FontAwesomeIcon icon={faThumbsUp} /><FontAwesomeIcon icon={faThumbsDown} /></h3>
</div>
{toggle? 
<>
{comments.map(comment => <Comment {...comment} key = {comment._id}/>)}
<CommentForm 
btnText = "Submit Comment" 
toggle = {() => setToggle(prevToggle => !prevToggle)}
handleChange = {handleChange}
handleSubmit = {handleSubmit}
inputs = {inputs}
/> 
</>
: <FontAwesomeIcon icon={faComment} onClick = {() => setToggle(prevToggle => !prevToggle)} />}
    </div>
  )
}