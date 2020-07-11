import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

    state={
        persons:[
            {name:"krishan",skill:"FullStack Web Developer"},
            {name:"Pawan",skill:"FullStack Web Developer"},
            {name:"Ajay Kadoula",skill:"FullStack Web Developer"},
            {name:"Rishu Gupta",skill:"FullStack Web Developer"}
        ],

        otherState:'some other state'
    }

    switchStateHandler = ()=>{
  // Dont do this this.state.persons[0].name=maximilian
         this.setState({
             persons:[
                {name:"Rishu Gupta",skill:"FullStack/GITHUB"},
                {name:"krishan",skill:"FullStack Web Developer"},
                {name:"Pawan",skill:"FullStack Web Developer"},
                {name:"Ajay Kadoula",skill:"FullStack Web Developer"}
               
               
             ]
         })
   
    }

    nameChangedhandler=(event)=>{
         this.setState({
             persons:[
                {name:event.target.value,skill:"FullStack/GITHUB"},
                {name:"krishan",skill:"FullStack Web Developer"},
                {name:"Pawan",skill:"FullStack Web Developer"},
                {name:"Ajay Kadoula",skill:"FullStack Web Developer"}
             ]
         })
    }

    render() {

        const style={
            font:'inherit',
            border:'1px sloid blue',
            padding:'5px',
            cursor:'pointer',
            margin:'4px'
        }
        return ( 
        <div className = "App" >
            <h2>Hii  i'm react app</h2>
             
                <button onClick={this.switchStateHandler} style={style}>Switch Name</button><br/>
                
            < Person name={this.state.persons[0].name} skill={this.state.persons[0].skill} changed={this.nameChangedhandler} />
            < Person name={this.state.persons[1].name} skill={this.state.persons[1].skill} />
            < Person name={this.state.persons[2].name} skill={this.state.persons[2].skill} />
            < Person name={this.state.persons[3].name} skill={this.state.persons[3].skill} />
           
            </div>
        );
    }

}

export default App;