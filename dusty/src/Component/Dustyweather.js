import React from 'react';
import './Dustyweather.css';

const Dustyweather = ({weather}) => {
    return (
        <div className="d-weather">
            {weather}
        </div>
    );
}

export default Dustyweather;