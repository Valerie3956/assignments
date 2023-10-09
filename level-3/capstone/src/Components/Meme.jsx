export default function Meme(props) {
  return (
    <>
      <div className="meme--container">
        <img src={props.image} className="image" />
        <h2 className="meme--text top">{props.topText}</h2>
        <h2 className="meme--text bottom">{props.bottomText}</h2>
      </div>
      <div className="button--container">
        <button onClick={() => props.handleEdit(props.id)}>EDIT MEME</button>
        <button onClick={() => props.handleDelete(props.id)}>DELETE MEME</button>
      </div>
    </>
  )
}