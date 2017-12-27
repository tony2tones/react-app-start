import React from 'react';

const person = (props) => {
    return <div className="Person">
        <p onClick={props.clickThisBaby}> My name is {props.name} and i'm {props.age} years old </p>
        <input type="text" onChange={props.switchThisName}/>
    </div>

};

export default person;
