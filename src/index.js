import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Countdown from './Components/Countdown/Countdown';
import dayjs from 'dayjs';

class App extends Component { 
  //Set Default launch date on first load
  setLaunchDate(launch){
    const defaultDate = launch.set('hour', 0).set('minute', 0).set('second', 0).set('date', launch.get('date')+2);
    return defaultDate;
  }

  render(){
    return(
    <div className="App">
      <h1>WE'RE LAUNCHING SOON</h1>
      <Countdown
      CountdownTime={this.setLaunchDate(dayjs())}/>
    </div>
    );
  }
}

  // ========================================
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <div className='stars'></div>
      <App />
      <div className='mountains'></div>
    </React.StrictMode>
  );