import React from 'react';
import Icon from './Img/Icon.png';
import Logo from './Img/Logo.png';
import './Dustytemplate.css';

const Dustytemplate = ({change, time, morning, weather, dustyConcentration, onoff}) => {
    return (
        <main className="main">
            <div className="border-top-left"></div>
            <div className="border-top-right"></div>
            <img className="icon" alt="Icon" onClick={change} src={Icon}/>
            <section className="tem-time">
                {time}
            </section>
            <section className="tem-morning">
                {morning}
            </section>
            <section className="tem-weather">
                {weather}
            </section>
            <img className="logo" alt="Logo" src={Logo}/>
            <section className="tem-con">
                {dustyConcentration}
            </section>
            <section className="tem-time">
                {onoff}
            </section>
        </main>
    );
}

export default Dustytemplate;