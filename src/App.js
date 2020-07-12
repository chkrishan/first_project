import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

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

    deletePersonhnadler=(personIndex)=>{
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

        const style={
            font:'inherit',
            border:'1px sloid blue',
            padding:'5px',
            cursor:'pointer',
            margin:'4px'
        }

        let persons=null;
        if(this.state.showPerson){
            persons=(
                <div>
                {
                    this.state.persons.map((person,index)=>{
                        return <Person
                         click={()=>this.deletePersonhnadler(index)}
                          name={person.name} 
                          skill={person.skill}
                          key={person.id}
                          changed={(event)=>this.nameChangedhandler(event,person.id)}/>
                    })
                }
                </div>
            )
        }
        return ( 
        <div className = "App" >
            <h2>Hii  i'm react app</h2>
            <button onClick={this.togglePersonHandler} style={style}>Show Persons</button><br/>
            { persons }   
        </div>
        );
    }

}

export default App;

//we use single curly braces {} to render something dynamic in JSX