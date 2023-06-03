import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';   
import App from './App.js';
import './Notes.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


//custom component (functional component)
// we can use it multiple time without writing code again
// we can pass parameters to functional component
// we can use arrays to pass it
const data=[
  {
    name : "Madiha",
    surname:"Mujawar"
  },
  {
    name:"Ayesha",
    surname:"Sayyed"
  }
]

const data1=[
  {
    name : "CodeWizard",
    surname:"Mujawar"
  },
  {
    name:"CodeFreak",
    surname:"Said"
  }
]

function nard(val){
  return(
    <>
      <Card 
        name={val.name}
        surname={val.surname}
      />
    </>
  );
}

function Card(props){
  return(
    <>
    <h1>HELLO {props.name} {props.surname}</h1>
    </>
   
  )
}

// this name thing we are passing called props

ReactDOM.render(
<>
{/* <Card name={data[0].name} surname={data[0].surname}/>
<Card name={data[1].name} surname={data[1].surname}/>
<Card name="Parveen" surname="Shaikh"/> */}

{/* {data1.map(nard)} */}
<App/>
</>
, document.getElementById('root')
);