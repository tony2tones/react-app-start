import React from 'react';

const validation = (props) => {
    let validationMessage = <p>Text long enough</p>;

    if (props.inputLength < 5) {
        validationMessage = <p>Text too short brah</p>
    }
    return (
        <div>
            {validationMessage}
        </div>

    )
}

export default validation;