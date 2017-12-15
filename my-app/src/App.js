import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2> This is React </h2>
        <p> this is really working </p>
        <button> Switch Name</button>
        <Person name="Tony" age="32" />
        <Person name="Steve" age="30">My hobby is racing</Person>
        <Person name="Sally" age="28" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is React!!!! and this works ya'));
  }
}

export default App;
