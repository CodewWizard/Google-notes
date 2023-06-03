import React, { useState } from "react";

const Main = (props) => {
  const [expand, setExpand] = useState(false);

  const expandIt=()=>{
    setExpand(true);
  }

  const [note, setNote] = useState({
    title : "",
    content :""
  });


  const inputEvent =(event) =>{

    const {value, name} = event.target;

    setNote((prevData)=>{
      return {
        ...prevData,
        [name] : value,
      };
    })
    // console.log(note);
  }

  const addEvent =()=>{
    props.passNote(note);
    setNote({
      title : "",
      content :""
    });
  }

  return (
    <>
      <div className="header">
        <h1>Google Keep Notes</h1>
        <div class="card">
          <div class="card-header">Keep Notes</div>
          <div class="card-body">
            <p class="card-text">
            {expand ?
             <input type="text" class="titleInput" name="title" className="form-control" placeholder="Title" value={note.title} onChange={inputEvent}/> 
              :null}
            </p>
            <textarea class="form-control" name="content" placeholder="Write a note here" id="floatingTextarea" value={note.content} onChange={inputEvent} onClick ={expandIt} /><br/>
            {expand?
            <button className="btn btn-primary" onClick={addEvent}>+</button>
            :null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
