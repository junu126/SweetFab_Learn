import React from 'react';
import './Dustytime.css'

const Dustytime = ({time, day}) => {

    return (
        <div className="clock">
            <span className="time">
                <span className="fuck">:</span>
                {time}
            </span>
            <span className="day">
                {day}
            </span>    
        </div>
    );
}

export default Dustytime;