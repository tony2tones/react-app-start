import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Tony', age: 32},
      {name: 'Steve', age: 29},
      {name: 'Sally', age: 28}
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
  }
  changeHandler = (event)=> {
    state = {
      persons: [
        {name: 'Tony', age: 32},
        {name: event.target.value, age: 29},
        {name: 'Sally', age: 28}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h2> This is React </h2>
        <p> this is really working </p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
        changed={this.changeHandler} 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}>My hobby is racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is React!!!! and this works ya'));
  }
}

export default App;
