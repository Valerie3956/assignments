import Navbar from "./Navbar.jsx"
// import "/Style.css"

export default function Header (){
    return(
        <div className = "header">
            <Navbar />
            <div className = "title--container">
            <h1 className = "blog--title">Clean Blog</h1>
            <h2 className = "blog--subtitle">A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}