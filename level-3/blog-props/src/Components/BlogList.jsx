import BlogPost from "./BlogPost.jsx"
import data from "./data.jsx"

export default function BlogList(){
    const posts = data.map(item =>{
        return(
            <BlogPost
            title = {item.title}
            subTitle = {item.subTitle}
            author = {item.author}
            date = {item.date}
            />
        )
})
    return(
    <div>
        {posts}
        <button className = "button">Older Posts</button>
    </div>
    )
}

console.log(data)