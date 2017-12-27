import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Person name="Tony" age="32"/>
       <Person name="malone" age="33"/>
       <Person />
      </div>
    );
  }
}

export default App;
