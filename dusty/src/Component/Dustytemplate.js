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
            <section>
                {time}
            </section>
            <section>
                {morning}
            </section>
            <section>
                {weather}
            </section>
            <img className="logo" alt="Logo" src={Logo}/>
            <section>
                {dustyConcentration}
            </section>
            <section>
                {onoff}
            </section>
        </main>
    );
}

export default Dustytemplate;