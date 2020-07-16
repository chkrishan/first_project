import React, { Component } from 'react';
import Person from './Person/Person';
// import Radium ,{styleRoot} from 'radium';
import './App.css';
import styled from 'styled-components';

const StyledButtton=styled.button`
font:inherit;
border:1px sloid blue;
padding:5px;
cursor:pointer;
margin:4px;
background-color:${props=>props.alt?"red":"green"};
&:hover{
    background-color:${props=>props.alt?"salmon":"lightgreen"};
    color:black;
}

`;

class App extends Component {

    state={
        persons:[
            {id:"1", name:"krishan", skill:"FullStack Web Developer"},
            {id:"2", name:"Pawan", skill:"FullStack Web Developer"},
            {id:"3", name:"Ajay Kadoula", skill:"FullStack Web Developer"},
            {id:"4", name:"Rishu Gupta", skill:"FullStack Web Developer"}
        ],
        otherState:'some other state',
        showPerson:false
    }

  

    nameChangedhandler=(event,id)=>{

        const personIndex=this.state.persons.findIndex(per => {
           return per.id===id;
        });

        const person={...this.state.persons[personIndex]};

        person.name=event.target.value;

        const persons=[...this.state.persons];

        persons[personIndex]=person;
         this.setState({persons:persons})
    }

    togglePersonHandler=()=>{
        
       // this.showPerson=true; you can't do this ypu have to use setState to change the state 
       const doesShow=this.showPerson;
       this.setState({showPerson:!doesShow})
    }

    deletePersonhandler=(personIndex)=>{
        //for best practice copy the original array and then do stuff with this new array and at the end upadte your currnt array
        // you can use 2 methods to copy 
        //first is 
        //const persons=this.state.persons.slice();
        //or you can use ES6 spread operator
        const persons=[...this.state.persons];
        //the splice method would remove element from arrray
        persons.splice(personIndex,1);
        this.setState({persons:persons});

    }

    render() {
         // inline styling
        // const style={
        //     font:'inherit',
        //     border:'1px sloid blue',
        //     padding:'5px',
        //     cursor:'pointer',
        //     margin:'4px',
        //     backgroundColor:'green',
        //     ':hover':{
        //         backgroundColor:'lightgreen',
        //         color:'black'
        //     }
        // }
        //we are not using inline style because here we are using style-component

        let persons=null;
        if(this.state.showPerson){
            persons=(
                <div>
                {
                    this.state.persons.map((person,index)=>{
                        return <Person
                         click={()=>this.deletePersonhandler(index)}
                          name={person.name} 
                          skill={person.skill}
                          key={person.id}
                          changed={(event)=>this.nameChangedhandler(event,person.id)}/>
                    })
                }
                </div>
            );
            // style.backgroundColor='grey';
            // style[':hover']={
            //     backgroundColor:'lightgreen',
            //     color:'black'
           // }
        }

        //let classes=['red','bold'].join(' ');
        //this will change this array of strings into a single string "bold red"
        let classes =[];
        if(this.state.persons.length<=2){
            classes.push('red');
        }
        if(this.state.persons.length<=1){
            classes.push('bold');
        }

        return ( 
            
        <div className = "App" >
            <h2>Hii  i'm react app</h2>
            <p className={classes.join(' ')}>this is really working</p>
            <StyledButtton  alt={this.state.showPerson} onClick={this.togglePersonHandler} >Show Persons</StyledButtton><br/>
            { persons }   
        </div>
        
        );
    }

}

export default App;

//we use single curly braces {} to render something dynamic in JSX