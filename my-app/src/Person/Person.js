import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} person damnit and i'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" changed={props.changed}/>
        </div>
    )
}

export default person;