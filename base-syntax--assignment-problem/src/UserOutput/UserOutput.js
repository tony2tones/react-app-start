import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
        <hr/>
            <div class="border">
                <p>Username: {props.name} </p>
                <p>Lorem ispum Dawgs Lorem ispum Dawgs Lorem ispum Dawgs Lorem ispum Dawgs</p>
            </div>
        </div>
    )
}

export default userOutput;