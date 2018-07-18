import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Dustytemplate from './Component/Dustytemplate';
import Dustytime from './Component/Dustytime';
import Dustymorning from './Component/Dustymorning';

//{'h': 30, 't': 30, 'd': 30}

class App extends Component {

  state = {
    day : moment().format('YYYY/MM/DD'),
    time : moment().format('hh:mm'),
    morning : this.PA
  }

  PA = () => {
    let po;
    let po2;
    var YN = axios.get(`http://10.156.147.195:86`)
      .then(res => {
        const YN = res.data.d;
        YN = Number();
        if(YN < 36){
          po = `아침운동${<span className="or">있음</span>}`
        } else {
          po = `아침운동${<span className="or">없음</span>}`
        }
      })

    var WE = axios.get(`https://api2.sktelecom.com/weather/current/minutely?version=1&lat=36.35111&lon=127.38500&appKey=d9880ad1-c2ab-46b8-b7be-082577b23600`)
    .then(res => {
      const WE = res.data.weather.minutely[0].sky.name;

      if(WE === '맑음' || WE === '구름조금' || WE === `구름많음`) {
        po2 = `아침운동${<span className="or">있음</span>}`
      } else {
        po2 = `아침운동${<span className="or">없음</span>}`
      }
    })
    if(YN.po === `아침운동있음` && WE.po2 === `아침운동있음`) {
      this.setState({
        morning : `아침운동${<span className="or">있음</span>}`
      })
    } else {
      this.setState({
        morning : `아침운동${<span className="or">없음</span>}`
      })
    }
  }

  onClick = () => {

    const day = moment().format('YYYY/MM/DD');
    const time = moment().format('hh:mm');

    this.PA

    this.setState({
      day : day,
      time : time,
    })
  }

  render() {
    return (
      <Dustytemplate
        change = {this.onClick}

        time = {<Dustytime 
            time = {this.state.time}
            day = {this.state.day}
          />}
        
        morning = {<Dustymorning
            morning = {this.PA}
            //weather = {}
          />}

        //weather = {}
      />
    );
  }
}

export default App;
