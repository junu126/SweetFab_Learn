import React from 'react';
import './Concentration.css'

const Concentration = ({density,emotion }) => {

    return (
        <div className="Con">
            <span className="upper-left">미세먼지 농도</span>
            <span className="upper-right">{emotion}</span>
            <span className="under">{density}</span>
        </div>
    );
}

export default Concentration;