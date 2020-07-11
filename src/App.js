import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

    state={
        persons:[
            {name:"krishan",skill:"FullStack Web Developer"},
            {name:"Pawan",skill:"FullStack Web Developer"},
            {name:"Ajay Kadoula",skill:"FullStack Web Developer"},
            {name:"Rishu Gupta",skill:"FullStack Web Developer"},
            {name:"Akash",skill:"UI/UX Designer"},
            {name:"Pankaj",skill:"UI/UX Designer"},
            {name:"vikas",skill:"React Developer"},
            {name:"Pankaj",skill:"Andriod Developer"}
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
                {name:"Ajay Kadoula",skill:"FullStack Web Developer"},
                {name:"Akash",skill:"UI/UX Designer"},
                {name:"Pankaj",skill:"UI/UX Designer"},
                {name:"vikas",skill:"React Developer"},
                {name:"Pankaj",skill:"Andriod Developer"}
               
             ]
         })
   
    }

    render() {
        return ( 
        <div className = "App" >
             
                <button onClick={this.switchStateHandler}>Switch Name</button><br/>
            < Person name={this.state.persons[0].name} skill={this.state.persons[0].skill} />
            < Person name={this.state.persons[1].name} skill={this.state.persons[1].skill} />
            < Person name={this.state.persons[2].name} skill={this.state.persons[2].skill} />
            < Person name={this.state.persons[3].name} skill={this.state.persons[3].skill} />
            < Person name={this.state.persons[4].name} skill={this.state.persons[4].skill} />
            < Person name={this.state.persons[5].name} skill={this.state.persons[5].skill} />
            < Person name={this.state.persons[6].name} skill={this.state.persons[6].skill} />
            < Person name={this.state.persons[7].name} skill={this.state.persons[7].skill} />
            </div>
        );
    }

}

export default App;