import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Tony", age: "32" },
      { name: "Malone", age: "34" },
      { name: "Sally", age: "35" }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Tony2Tones", age: "33" },
        { name: "Malone", age: "34" },
        { name: "Sally", age: "25" }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
