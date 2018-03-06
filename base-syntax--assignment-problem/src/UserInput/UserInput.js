import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <h2> Update your user name </h2>
            <input type="text" onChange={props.changed} value={props.value}/>
        </div>
    )
}

export default userInput;