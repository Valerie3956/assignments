export default function Meme(props) {
  return (
    <>
      <div className="meme--container">
        <img src={props.image} className="image" />
        <h2 className="meme--text top">{props.topText}</h2>
        <h2 className="meme--text bottom">{props.bottomText}</h2>
      </div>
      <div className="button--container">
       {props.toggle === false && <button onClick={() => props.handleToggle(props.id)}>EDIT MEME</button>}
        <button onClick={() => props.handleDelete(props.id)}>DELETE MEME</button>
        {props.toggle && <>
          <button className="button" onClick={() => props.generateNewImage(props.id)}>Get New Image</button>
          <form className="form" onSubmit={(event) => props.submitEdit(event, props.id)}>
            <input
              type="text"
              value={props.topText}
              name="topText"
              placeholder="Edit Top Text"
              className="input"
              onChange={(event) => props.handleEditForm(event, props.id)}
            ></input>
            <input
              type="text"
              value={props.bottomText}
              name="bottomText"
              placeholder="Edit Bottom Text"
              className="input"
              onChange={(event) => props.handleEditForm(event, props.id)}
            ></input>
            <button>SUBMIT MEME</button>
          </form>
          </>
          }   
      </div>
    </>
  )
}