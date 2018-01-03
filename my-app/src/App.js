import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Tony', age: 32},
      {name: 'Steve', age: 29},
      {name: 'Sally', age: 28}
    ],
    toggleList : false
  }

  switchNameHandler = () => {
    const doesItShow = this.state.toggleList;
    console.log(this.state.toggleList);
    this.setState({toggleList : !doesItShow});

  }
  changeNameHandler = (event)=> {
    this.setState = {
      persons: [
        {name: 'Tony', age: 32},
        {name: event.target.value, age: 29},
        {name: 'Sally', age: 28}
      ]
    }
  }

  render() {
    const person = null;

    if(this.state.toggleList){
    this.state.persons.map(person => {
      return <Person 
              name={person.name}
              age={person.age}
              />
    });
   
    }

    return (
      <div className="App">
        <h2> This is React </h2>
        <p> this is really working </p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        {person}
      </div>
    );
  }
}

export default App;
