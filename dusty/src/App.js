import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Dustytemplate from './Component/Dustytemplate';
import Dustytime from './Component/Dustytime';
import Dustymorning from './Component/Dustymorning';
import Dustyweather from './Component/Dustyweather';
import Concentration from './Component/Concentration';

//{'h': 30, 't': 30, 'd': 30}

class App extends Component {

  state = {
    day : moment().format('YYYY/MM/DD'),
    time : moment().format('hh:mm'),
    morning : `아침운동있음`,
    morningApi : ``,
    morningSer : ``,
    weather : `오늘날씨맑음`,
    density : `00 / mph`,
    emotion : `좋음`,
  }

  // 아침운동 유무
  MorningFn = () => {

    var YN = axios.get(`URL`)
      .then(res => {
        let cYN = res.data.d;
        cYN = Number(cYN);
        if(cYN < 36){
          this.setState({morningSer : `아침운동있음`})
        } else {
          this.setState({morningSer : `아침운동없음`})
        }
      })

    var WE = axios.get(`https://api2.sktelecom.com/weather/current/minutely?version=1&lat=36.35111&lon=127.38500&appKey=d9880ad1-c2ab-46b8-b7be-082577b23600`)
    .then(res => {
      let cWE = res.data.weather.minutely[0].sky.name;

      if(cWE === '맑음' || cWE === '구름조금' || cWE === `구름많음`) {
        this.setState({morningApi : `아침운동있음`})
      } else {
        this.setState({morningApi : `아침운동없음`})
      }

    if(this.state.morningSer === `아침운동있음` && this.state.morningApi === `아침운동있음`) {
      this.setState({
        morning : `아침운동있음`
      })
    } else {
      this.setState({
        morning : `아침운동없음`
      })
    }
  })
  }

  // 날씨
  WeatherFn = () => {
    axios.get(`https://api2.sktelecom.com/weather/current/minutely?version=1&lat=36.35111&lon=127.38500&appKey=d9880ad1-c2ab-46b8-b7be-082577b23600`)
    .then(res => {
      let cWt = res.data.weather.minutely[0].sky.name;

      if(cWt === '비') {
        this.setState({
          weather : "오늘날씨비" // 비
        })
      } else if(cWt === '눈') {
        this.setState({
          weather : "오늘날씨눈" // 눈
        })
      } else if(cWt === '맑음') {
        this.setState({
          weather : "오늘날씨맑음" // 태양
        })
      } else if(cWt === '구름조금') {
        this.setState({
          weather : "오늘날씨구름 조금" // 구름조금
        })
      } else if(cWt === '구름많음') {
        this.setState({
          weather : "오늘날씨구름 많음" // 구름조금
        })
      }
    })
  }


  // 클릭 함수
  onClick = () => {

    const day = moment().format('YYYY/MM/DD');
    const time = moment().format('hh:mm');

    this.MorningFn()
    this.WeatherFn()
    this.ConFn()
    this.DenFn()

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
            morning = {this.state.morning}
          />}

        weather = {<Dustyweather
          weather = {this.state.weather}
        />}

        dustyConcentration = {<Concentration
          density = {this.state.density}
          emotion = {this.state.emotion}
        />}

        
      />
    );
  }
}

export default App;
