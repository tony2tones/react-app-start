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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons:persons})

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              clickThisBaby={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          })
          }
        </div>
      );

      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button 
        style={style}
        onClick={this.togglePersons}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
