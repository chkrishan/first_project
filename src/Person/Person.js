import React from 'react';
import './Person.css';
const Person = (props) => {
    return ( 
        <div className="person">
           <img src={require("./Images/man.jpg")} alt="imageErr" className="img"></img>
           <h2 >{props.name}</h2>
           <p>{props.skill}</p> 
           <input type="text" onChange={props.changed} value={props.name} />
           <button onClick={props.click}>Delete</button>
        </div>
    
    )
};

export default Person;