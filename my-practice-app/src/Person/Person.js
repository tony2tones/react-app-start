import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    return <div className="Person">
        <p onClick={props.clickThisBaby}> My name is {props.name} and i'm {props.age} years old </p>
        <input type="text" onChange={props.switchThisName} value={props.name}/>
    </div>

};

export default Radium(person);
