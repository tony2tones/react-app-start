import React from 'react';

const char = (props) => {
    const style = {
        display:'inline-block',
        padding:'16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }
    return(
        <div style={style} onClick={props.clickedChar}>
        {props.charList}
        </div>
    )

}

export default char;