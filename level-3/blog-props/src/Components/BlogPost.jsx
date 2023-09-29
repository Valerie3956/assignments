

export default function BlogPost(props){
    return(
       <div className = "blog--post">
        <h1 className = "blog--post--title">{props.title}</h1>
        <h2 className = "blog--post--subtitle">{props.subTitle}</h2>
        <h3 className = "post--details">Posted by <span>{props.author}</span> on {props.date}</h3>
       </div> 
    )
}

// console.log(data)