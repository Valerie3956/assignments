export default function Meme(props) {
    return (
        <div className="meme">
        <img src={props.image} className="image" />
        <h2 className = "meme--text top">{props.topText}</h2>
        <h2 className = "meme--text bottom">{props.bottomText}</h2>
        <button onClick = {props.handleEdit}>EDIT MEME</button>
        <button onClick = {props.handleDelete}>DELETE MEME</button>
      </div>
    )
}