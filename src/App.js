import './App.css';
import './Notes.css';
import Note from './Note';
import { useState } from 'react';
import Main from './Main'

const App = () =>{
  const [addItem, setAddItem] = useState([]);

  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return [...prevData, note];
    })
    console.log(note);
    
  }

  const onDelete =(id)=>{
    setAddItem((oldData) =>
      oldData.filter((currentData, indx) =>{
        return indx != id;
      })
    
     )
  }

  return(
    <>
      <Main passNote={addNote}/>
      {
        addItem.map((val, index)=>{
          return <Note key = {index} id = {index} title = {val.title} content = {val.content} deleteItem={onDelete} />
        })
      }
    </>
  );
}

export default App;

