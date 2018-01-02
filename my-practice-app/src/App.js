import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Tony", age: "32" },
      { name: "Malone", age: "34" },
      { name: "Sally", age: "35" }
    ],
    showPersons: false
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

  updateNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: "33" },
        { name: "Malone", age: "34" },
        { name: "Sally", age: "25" }
      ]
    })
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            switchThisName={this.updateNameHandler}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            clickThisBaby={this.switchNameHandler} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
      )
    };


    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button onClick={this.togglePersons}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
