import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.clickThisBaby}> My name is {props.name} and i'm {props.age} years old </p>
            <input type="text" onChange={props.switchThisName} value={props.name}/>
        </div>
    )
};

export default Radium(person);
