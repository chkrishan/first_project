import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
    render() {
        return ( 
        <div className = "App" >
             
            < Person name="Krishan" skill="FullStack Web Developer" />
            < Person name="Pawan" skill="UI/UX Designer" />
            < Person name="Ajay Kadoula" skill="FullStack Web Developer" />
            < Person name="Rishu Gupta" skill="Full Stack" />
            < Person name="Akash" skill="Full Stack" />
            < Person name="Pankaj" skill="React Developer" />
            < Person name="vikas" skill="UI/UX Designer " />
            < Person name="Pawan" skill="UI/UX Designer" />
            </div>
        );
    }

}

export default App;