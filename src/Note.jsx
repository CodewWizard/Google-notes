import React from "react";
import './Notes.css';

const Note = (props) => {

  const deleteNote =()=>{
    props.deleteItem(props.id);
  }

  return (
    <>
      <div className="card new-card">
        <div className="card-body">
          <h5 className="card-title" style={{fontWeight:"bold"}}>{props.title}</h5>
          <p className="card-text">
            {props.content}
          </p>
          <button className="btn btn-danger" onClick={deleteNote}>Delete</button>
        </div>
    </div>
    </>
  );
};

export default Note;
