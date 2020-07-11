import React from 'react';
import './Person.css';
const Person = (props) => {
    return ( 
        <div className="person">
           <img src={require("./Images/man.jpg")} alt="imageErr" className="img"></img>
           <h2>{props.name}</h2>
           <p>{props.skill}</p> 
        </div>
    
    )
};

export default Person;