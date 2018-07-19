import React from 'react';
import './Onoff.css';

const onoff = ({ball, turn}) => {
    return (
        <div className="onoff">
            <span className="use">Dusty가동중</span>
            <span className="turn"><sup className={ball}>&bull;</sup>{turn}</span>
        </div>
    );  
}

export default onoff;