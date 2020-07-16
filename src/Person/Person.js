import React from 'react';
// import Radium from 'radium';
// import './Person.css';
import styled from 'styled-components';

const StyleDiv=styled.div`

    width: 200px;
    height: 250px;
    margin: 10px;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    padding: 5px;
    display: inline-block;
    transition: all .2s ease-in-out;


&:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 2px grey;
}


@media (max-width:450px):{
    width:'100%' ;
    

`;

const Image=styled.img`

    border-radius: 50%;
    display: inline-block;
    height: 80px;
    width: 80px;

`

const Person = (props) => {

    // const style={
    //    ' @media (min-width:500px)':{
    //       width:'450px'
          
    //     }
    // }
    return ( 
        <StyleDiv>
           <Image src={require("./Images/man.jpg")} alt="imageErr" ></Image>
           <h2 >{props.name}</h2>
           <p>{props.skill}</p> 
           <input type="text" onChange={props.changed} value={props.name} />
           <button onClick={props.click} className="deleteBtn">Delete</button>
           </StyleDiv>
    
    )
};

export default Person;  